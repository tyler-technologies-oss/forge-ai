import { expect } from '@esm-bundle/chai';
import DOMPurify from 'dompurify';
import { renderInlineMarkdown, renderMarkdown, resolveTrustedOrigin, setTrustedImageOrigin } from './markdown.js';

const OUTSIDE_HOST = 'external.invalid';

function parse(html: string): HTMLElement {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
}

// Every non-link attribute that would make the browser fetch the outside host on render.
function fetchingReferences(html: string): string[] {
  return Array.from(parse(html).querySelectorAll('*'))
    .filter(el => el.tagName !== 'A')
    .flatMap(el =>
      Array.from(el.attributes)
        .filter(attr => attr.value.includes(OUTSIDE_HOST))
        .map(attr => `<${el.localName} ${attr.name}>`)
    );
}

const renderers: Array<[string, (content: string) => string]> = [
  ['renderMarkdown', content => renderMarkdown(content, { streaming: false })],
  ['renderInlineMarkdown', content => renderInlineMarkdown(content)]
];

describe('markdown', () => {
  renderers.forEach(([name, render]) => {
    describe(name, () => {
      [
        ['inline markdown image', `![status](https://${OUTSIDE_HOST}/p.png?q=secret)`],
        ['protocol-relative markdown image', `![status](//${OUTSIDE_HOST}/p.png?q=secret)`],
        ['raw img', `<img alt="status" src="https://${OUTSIDE_HOST}/p.png?q=secret">`],
        ['hidden raw img', `<img alt="status" style="display:none" src="https://${OUTSIDE_HOST}/p.png?q=secret">`]
      ].forEach(([label, content]) => {
        it(`should replace an outside ${label} with a link naming the host`, () => {
          const html = render(content);
          const link = parse(html).querySelector('a');
          const href = new URL(link?.getAttribute('href') ?? '');

          expect(fetchingReferences(html)).to.deep.equal([]);
          expect(parse(html).querySelector('img')).to.be.null;
          expect(`${href.host}${href.pathname}${href.search}`).to.equal(`${OUTSIDE_HOST}/p.png?q=secret`);
          expect(link?.textContent).to.equal(`status (${OUTSIDE_HOST})`);
          expect(link?.getAttribute('target')).to.equal('_blank');
          expect(link?.getAttribute('rel')).to.equal('noreferrer noopener');
        });
      });

      it('should label an outside image without alt text as "Image"', () => {
        const link = parse(render(`![](https://${OUTSIDE_HOST}/p.png)`)).querySelector('a');

        expect(link?.textContent).to.equal(`Image (${OUTSIDE_HOST})`);
      });

      it('should render an outside image inside a link as text naming the host, keeping the link destination', () => {
        const html = render(`[![status](https://${OUTSIDE_HOST}/p.png)](https://example.com/page)`);
        const links = parse(html).querySelectorAll('a');

        expect(fetchingReferences(html)).to.deep.equal([]);
        expect(links.length).to.equal(1);
        expect(links[0].getAttribute('href')).to.equal('https://example.com/page');
        expect(links[0].textContent).to.equal(`status (${OUTSIDE_HOST})`);
      });

      [
        ['video', `<video src="https://${OUTSIDE_HOST}/a.mp4" title="Demo">fallback</video>`, 'Demo'],
        ['audio', `<audio src="https://${OUTSIDE_HOST}/a.mp3"></audio>`, 'Audio'],
        ['video with a source child', `<video><source src="https://${OUTSIDE_HOST}/a.mp4"></video>`, 'Video']
      ].forEach(([label, content, linkLabel]) => {
        it(`should replace ${label} with a link naming the host`, () => {
          const html = render(content);
          const link = parse(html).querySelector('a');

          expect(fetchingReferences(html)).to.deep.equal([]);
          expect(parse(html).querySelector('video, audio')).to.be.null;
          expect(link?.getAttribute('href')).to.contain(OUTSIDE_HOST);
          expect(link?.textContent).to.equal(`${linkLabel} (${OUTSIDE_HOST})`);
        });
      });

      it('should replace same-origin media with a link instead of loading it', () => {
        const html = render('<video src="/api/files/demo.mp4" controls>Download <a href="/x">here</a></video>');
        const links = parse(html).querySelectorAll('a');

        expect(parse(html).querySelector('video')).to.be.null;
        expect(links.length).to.equal(1);
        expect(links[0].getAttribute('href')).to.equal(new URL('/api/files/demo.mp4', document.baseURI).href);
        expect(links[0].textContent).to.equal(`Video (${window.location.host})`);
      });

      it('should render media without a source as its label', () => {
        const html = render('<video controls></video>');

        expect(parse(html).querySelector('video, a')).to.be.null;
        expect(parse(html).textContent?.trim()).to.equal('Video');
      });

      [
        ['srcset', `<img src="/ok.png" srcset="https://${OUTSIDE_HOST}/a.png 1x">`],
        ['picture/source', `<picture><source srcset="https://${OUTSIDE_HOST}/a.png"><img src="/ok.png"></picture>`],
        ['video poster', `<video poster="https://${OUTSIDE_HOST}/a.png"></video>`],
        ['video src', `<video src="https://${OUTSIDE_HOST}/a.mp4"></video>`],
        ['audio src', `<audio src="https://${OUTSIDE_HOST}/a.mp3"></audio>`],
        ['source src', `<video><source src="https://${OUTSIDE_HOST}/a.mp4"></video>`],
        ['track src', `<video><track src="https://${OUTSIDE_HOST}/a.vtt"></video>`],
        ['svg image', `<svg><image href="https://${OUTSIDE_HOST}/a.png"></image></svg>`],
        ['svg feImage', `<svg><filter id="f"><feImage href="https://${OUTSIDE_HOST}/a.png"></feImage></filter></svg>`],
        ['svg presentation url()', `<svg><rect fill="url(https://${OUTSIDE_HOST}/a.svg#p)"></rect></svg>`],
        ['CSS-escaped svg url()', `<svg><rect fill="\\75 rl(https://${OUTSIDE_HOST}/a.svg#p)"></rect></svg>`],
        ['CSS-escaped svg mask url()', `<svg><rect mask="\\75 rl('https://${OUTSIDE_HOST}/a.svg#m')"></rect></svg>`],
        ['svg mask image-set()', `<svg><rect mask="image-set('https://${OUTSIDE_HOST}/a.png' 1x)"></rect></svg>`],
        ['mathml mglyph', `<math><mi><mglyph src="https://${OUTSIDE_HOST}/a.png" alt="g"></mglyph></mi></math>`],
        ['style url()', `<div style="background-image:url(https://${OUTSIDE_HOST}/a.png)">x</div>`],
        ['background attribute', `<table background="https://${OUTSIDE_HOST}/a.png"><tr><td>x</td></tr></table>`],
        ['input type=image', `<input type="image" src="https://${OUTSIDE_HOST}/a.png">`]
      ].forEach(([label, content]) => {
        it(`should strip raw HTML that would fetch on render: ${label}`, () => {
          expect(fetchingReferences(render(content))).to.deep.equal([]);
        });
      });

      it('should drop a CSS function in an svg presentation attribute on an HTML element', () => {
        const html = render(
          `<a href="/x" title="https://${OUTSIDE_HOST}/a.png" mask="image-set(attr(title) 1x)">x</a>`
        );

        expect(parse(html).querySelector('a')?.hasAttribute('mask')).to.be.false;
      });

      it('should keep parentheses in an ordinary HTML attribute', () => {
        const html = render('<span aria-label="Revenue (USD)">x</span>');

        expect(parse(html).querySelector('span')?.getAttribute('aria-label')).to.equal('Revenue (USD)');
      });
    });
  });

  describe('svg and mathml', () => {
    [
      ['image-set(attr()) via title', `title="https://${OUTSIDE_HOST}/a.png" mask="image-set(attr(title) 1x)"`],
      ['image-set(attr()) via data-*', `data-x="https://${OUTSIDE_HOST}/a.png" mask="image-set(attr(data-x) 1x)"`],
      ['-webkit-image-set(attr())', `title="https://${OUTSIDE_HOST}/a.png" mask="-webkit-image-set(attr(title) 1x)"`]
    ].forEach(([label, attributes]) => {
      it(`should drop an svg mask that loads a URL from another attribute: ${label}`, () => {
        const html = renderMarkdown(`<svg><path ${attributes}></path></svg>`, { streaming: false });

        expect(parse(html).querySelector('path')?.hasAttribute('mask')).to.be.false;
      });
    });

    [
      ['a same-document url() fragment', 'url(#grad)'],
      ['an rgb() color', 'rgb(10, 20, 30)']
    ].forEach(([label, fill]) => {
      it(`should keep an svg fill set to ${label}`, () => {
        const html = renderMarkdown(`<svg><rect fill="${fill}"></rect></svg>`, { streaming: false });

        expect(parse(html).querySelector('rect')?.getAttribute('fill')).to.equal(fill);
      });
    });

    it('should keep an svg transform made of transform functions', () => {
      const html = renderMarkdown('<svg><path transform="translate(2, 2) rotate(10)"></path></svg>', {
        streaming: false
      });

      expect(parse(html).querySelector('path')?.getAttribute('transform')).to.equal('translate(2, 2) rotate(10)');
    });

    it('should check a long svg attribute in linear time', () => {
      const value = 'aB-'.repeat(40_000);
      const started = performance.now();
      const html = renderMarkdown(`<svg><path d="M0 0h9v9z" data-x="${value}"></path></svg>`, { streaming: false });

      expect(performance.now() - started).to.be.lessThan(1_000);
      expect(parse(html).querySelector('path')?.getAttribute('data-x')).to.equal(value);
    });

    it('should keep svg text and mathml', () => {
      const html = renderMarkdown('<svg><text>Q3 revenue</text></svg> <math><mi>x</mi><mo>=</mo><mn>2</mn></math>', {
        streaming: false
      });

      expect(parse(html).querySelector('svg text')?.textContent).to.equal('Q3 revenue');
      expect(parse(html).querySelector('math')?.textContent).to.equal('x=2');
    });
  });

  describe('complete content', () => {
    ['Cost<Budget Review Q3', 'price<limit and x<y'].forEach(message => {
      it(`should keep the text after a "<" in a finished message: ${message}`, () => {
        expect(parse(renderMarkdown(message, { streaming: false })).textContent?.trim()).to.equal(message);
      });
    });

    it('should still hide a tag that is only partly streamed', () => {
      expect(parse(renderMarkdown('Partial reply <cust')).textContent?.trim()).to.equal('Partial reply');
    });
  });

  describe('renderInlineMarkdown without links', () => {
    it('should render links as their text', () => {
      const html = renderInlineMarkdown(
        'Opened [parcel 4471](https://example.com/parcel/4471) and <a href="/x">x</a>',
        {
          links: false
        }
      );

      expect(parse(html).querySelector('a')).to.be.null;
      expect(parse(html).textContent).to.equal('Opened parcel 4471 and x');
    });

    it('should render an outside image as text naming the host', () => {
      const html = renderInlineMarkdown(`![status](https://${OUTSIDE_HOST}/p.png)`, { links: false });

      expect(fetchingReferences(html)).to.deep.equal([]);
      expect(parse(html).querySelector('a, img')).to.be.null;
      expect(parse(html).textContent).to.equal(`status (${OUTSIDE_HOST})`);
    });
  });

  it('should replace an outside reference-style markdown image with a link', () => {
    const html = renderMarkdown(`![status][r]\n\n[r]: https://${OUTSIDE_HOST}/p.png?q=secret`, { streaming: false });

    expect(fetchingReferences(html)).to.deep.equal([]);
    expect(parse(html).querySelector('a')?.textContent).to.equal(`status (${OUTSIDE_HOST})`);
  });

  it('should replace an outside image while streaming', () => {
    const html = renderMarkdown(`Here: ![status](https://${OUTSIDE_HOST}/p.png?q=secret)`);

    expect(fetchingReferences(html)).to.deep.equal([]);
  });

  [
    ['root-relative', '/api/files/chart.png'],
    ['document-relative', 'chart.png'],
    ['same-origin absolute', `${window.location.origin}/logo.png`],
    ['data:image', 'data:image/png;base64,iVBORw0KGgo=']
  ].forEach(([label, src]) => {
    it(`should keep an allowed ${label} image inline as written`, () => {
      const img = parse(renderMarkdown(`![chart](${src})`, { streaming: false })).querySelector('img');

      expect(img?.getAttribute('src')).to.equal(src);
      expect(img?.getAttribute('alt')).to.equal('chart');
    });
  });

  it('should not load an opaque-origin source inline', () => {
    const html = renderMarkdown('<img alt="status" src="cid:part1@example">', { streaming: false });

    expect(parse(html).querySelector('img')).to.be.null;
    expect(parse(html).textContent).to.equal('status');
  });

  it('should render a non-image data: URI as alt text', () => {
    const html = renderMarkdown('![x](data:text/html;base64,PHNjcmlwdD4=)', { streaming: false });

    expect(parse(html).querySelector('img, a')).to.be.null;
    expect(parse(html).textContent).to.contain('x');
  });

  it('should render an outside non-http image as alt text', () => {
    const html = renderMarkdown(`<img alt="status" src="ftp://${OUTSIDE_HOST}/p.png">`, { streaming: false });

    expect(fetchingReferences(html)).to.deep.equal([]);
    expect(parse(html).querySelector('a')).to.be.null;
    expect(parse(html).textContent).to.equal('status');
  });

  it('should render an image with an unparseable source as alt text', () => {
    const html = renderMarkdown('<img alt="status" src="http://[bad">', { streaming: false });

    expect(parse(html).querySelector('img, a')).to.be.null;
    expect(parse(html).textContent).to.equal('status');
  });

  it('should leave an image without a source untouched', () => {
    const html = renderMarkdown('<img alt="status">', { streaming: false });

    expect(parse(html).querySelector('img')?.getAttribute('alt')).to.equal('status');
  });

  it('should keep code block scroll region attributes', () => {
    const pre = parse(renderMarkdown('```js\nx\n```', { streaming: false })).querySelector('pre');

    expect(pre?.getAttribute('data-scroll-region')).to.equal('code');
    expect(pre?.getAttribute('aria-label')).to.equal('Code block');
  });

  it('should keep table alignment and scroll region attributes', () => {
    const table = parse(renderMarkdown('|a|b|\n|:-|-:|\n|1|2|', { streaming: false }));

    expect(table.querySelector('[data-scroll-region="table"]')?.getAttribute('aria-label')).to.equal('Tabular data');
    expect(table.querySelector('th')?.getAttribute('align')).to.equal('left');
  });

  it('should leave the host app DOMPurify sanitize calls untouched', () => {
    renderMarkdown(`![status](https://${OUTSIDE_HOST}/p.png)`, { streaming: false });

    const img = parse(
      DOMPurify.sanitize('<img src="https://cdn.example.com/logo.png" style="width:10px">')
    ).querySelector('img');

    expect(img?.getAttribute('src')).to.equal('https://cdn.example.com/logo.png');
    expect(img?.getAttribute('style')).to.equal('width:10px');
  });

  it('should apply hooks the host app registers on the shared DOMPurify instance', () => {
    const stripStorageHref = (node: Element): void => {
      if (node.getAttribute('href')?.startsWith('s3:')) {
        node.removeAttribute('href');
      }
    };
    DOMPurify.addHook('afterSanitizeAttributes', stripStorageHref);
    try {
      const html = renderMarkdown('[Y.pdf][ref]\n\n[ref]: s3://bucket/Y.pdf', { streaming: false });

      expect(parse(html).querySelector('a')?.hasAttribute('href')).to.be.false;
    } finally {
      DOMPurify.removeHook('afterSanitizeAttributes', stripStorageHref);
    }
  });

  it('should remove its hooks when sanitizing throws', () => {
    const throwOnce = (): void => {
      throw new Error('boom');
    };
    DOMPurify.addHook('uponSanitizeElement', throwOnce);
    try {
      expect(() => renderMarkdown('x', { streaming: false })).to.throw('boom');
    } finally {
      DOMPurify.removeHook('uponSanitizeElement', throwOnce);
    }

    const html = DOMPurify.sanitize(`<img src="https://${OUTSIDE_HOST}/p.png">`);

    expect(parse(html).querySelector('img')?.getAttribute('src')).to.contain(OUTSIDE_HOST);
  });

  describe('resolveTrustedOrigin', () => {
    it('should use the origin that served the module', () => {
      expect(
        resolveTrustedOrigin({ moduleUrl: 'https://cdn.example.com/forge-ai/md.js', pageOrigin: 'https://app.test' })
      ).to.equal('https://cdn.example.com');
    });

    ['file:///build/md.js', 'blob:https://app.test/1234', 'not a url', '{}'].forEach(moduleUrl => {
      it(`should fall back to the page origin for a module URL of ${moduleUrl}`, () => {
        expect(resolveTrustedOrigin({ moduleUrl, pageOrigin: 'https://app.test' })).to.equal('https://app.test');
      });
    });
  });

  describe('setTrustedImageOrigin', () => {
    const SERVICE = 'https://service.invalid';

    afterEach(() => setTrustedImageOrigin(window.location.origin));

    it('should keep an image from the configured origin inline', () => {
      setTrustedImageOrigin(`${SERVICE}/api/agents`);
      const img = parse(renderMarkdown(`![chart](${SERVICE}/api/files/chart.png)`, { streaming: false })).querySelector(
        'img'
      );

      expect(img?.getAttribute('src')).to.equal(`${SERVICE}/api/files/chart.png`);
    });

    it('should resolve a relative image against the configured origin and write it back absolute', () => {
      setTrustedImageOrigin(SERVICE);
      const img = parse(renderMarkdown('![chart](/api/files/chart.png)', { streaming: false })).querySelector('img');

      expect(img?.getAttribute('src')).to.equal(`${SERVICE}/api/files/chart.png`);
    });

    it('should render an image from the host page as a link once another origin is trusted', () => {
      setTrustedImageOrigin(SERVICE);
      const link = parse(
        renderMarkdown(`![logo](${window.location.origin}/logo.png)`, { streaming: false })
      ).querySelector('a');

      expect(
        parse(renderMarkdown(`![logo](${window.location.origin}/logo.png)`, { streaming: false })).querySelector('img')
      ).to.be.null;
      expect(link?.textContent).to.equal(`logo (${window.location.host})`);
    });

    it('should resolve a relative link against the configured origin', () => {
      setTrustedImageOrigin(SERVICE);
      const html = parse(
        renderMarkdown('[docs](/docs/x) [top](#top) [mail](mailto:a@b.invalid)', { streaming: false })
      );
      const hrefs = Array.from(html.querySelectorAll('a')).map(a => a.getAttribute('href'));

      expect(hrefs).to.deep.equal([`${SERVICE}/docs/x`, '#top', 'mailto:a@b.invalid']);
    });

    it('should leave relative links alone when the page origin is trusted', () => {
      const href = parse(renderMarkdown('[docs](/docs/x)', { streaming: false }))
        .querySelector('a')
        ?.getAttribute('href');

      expect(href).to.equal('/docs/x');
    });

    it('should trust no origin for a URL that is not http(s)', () => {
      setTrustedImageOrigin('file:///build');
      const html = renderMarkdown(`![logo](${window.location.origin}/logo.png)`, { streaming: false });

      expect(parse(html).querySelector('img')).to.be.null;
    });
  });

  describe('anchors', () => {
    it('should not add target or rel to an anchor whose href a host hook removed', () => {
      const stripStorageHref = (node: Element): void => {
        if (node.getAttribute('href')?.startsWith('s3:')) {
          node.removeAttribute('href');
        }
      };
      DOMPurify.addHook('afterSanitizeAttributes', stripStorageHref);
      try {
        const anchor = parse(
          renderMarkdown('[Y.pdf][ref]\n\n[ref]: s3://bucket/Y.pdf', { streaming: false })
        ).querySelector('a');

        expect(anchor?.hasAttribute('target')).to.be.false;
        expect(anchor?.hasAttribute('rel')).to.be.false;
      } finally {
        DOMPurify.removeHook('afterSanitizeAttributes', stripStorageHref);
      }
    });
  });

  describe('defences that only one rule provides', () => {
    it('should drop an svg attribute whose CSS function name is written with escapes', () => {
      const html = renderMarkdown(
        `<svg><path title="https://${OUTSIDE_HOST}/a.png" mask="image-se\\74(att\\72(title) 1x)"></path></svg>`,
        { streaming: false }
      );

      expect(parse(html).querySelector('path')?.hasAttribute('mask')).to.be.false;
    });

    it('should drop a style attribute that references another origin without url()', () => {
      const html = renderMarkdown(
        `<div style="background-image:image-set('https://${OUTSIDE_HOST}/a.png' 1x)">x</div>`,
        {
          streaming: false
        }
      );

      expect(parse(html).querySelector('div')?.hasAttribute('style')).to.be.false;
      expect(fetchingReferences(html)).to.deep.equal([]);
    });

    it('should drop a style attribute even when a host hook force-keeps it', () => {
      const keepStyle = (_node: Element, data: { attrName: string; forceKeepAttr?: boolean }): void => {
        if (data.attrName === 'style') {
          data.forceKeepAttr = true;
        }
      };
      DOMPurify.addHook('uponSanitizeAttribute', keepStyle);
      try {
        const html = renderMarkdown(`<div style="background:url(https://${OUTSIDE_HOST}/a.png)">x</div>`, {
          streaming: false
        });

        expect(fetchingReferences(html)).to.deep.equal([]);
      } finally {
        DOMPurify.removeHook('uponSanitizeAttribute', keepStyle);
      }
    });

    it('should keep its forbid lists when the host app has called DOMPurify.setConfig()', () => {
      DOMPurify.setConfig({ ADD_ATTR: ['data-x'] });
      try {
        const html = renderMarkdown(
          [
            `<img src="/ok.png" srcset="https://${OUTSIDE_HOST}/a.png 1x">`,
            `<picture><source srcset="https://${OUTSIDE_HOST}/b.png"><img src="/ok.png"></picture>`,
            `<svg><image href="https://${OUTSIDE_HOST}/c.png"></image></svg>`,
            `<table background="https://${OUTSIDE_HOST}/d.png"><tr><td>x</td></tr></table>`,
            `<div style="background-image:image-set('https://${OUTSIDE_HOST}/e.png' 1x)">x</div>`
          ].join('\n'),
          { streaming: false }
        );

        expect(fetchingReferences(html)).to.deep.equal([]);
      } finally {
        DOMPurify.clearConfig();
      }
    });
  });

  describe('accessibility attributes', () => {
    [
      [
        'an svg aria-label with an apostrophe',
        `<svg aria-label="Q3's revenue" role="img"></svg>`,
        'svg',
        'aria-label',
        "Q3's revenue"
      ],
      [
        'an html aria-label mentioning url()',
        '<span aria-label="see url(docs) for more">x</span>',
        'span',
        'aria-label',
        'see url(docs) for more'
      ]
    ].forEach(([label, content, selector, attr, value]) => {
      it(`should keep ${label}`, () => {
        expect(
          parse(renderMarkdown(content, { streaming: false }))
            .querySelector(selector)
            ?.getAttribute(attr)
        ).to.equal(value);
      });
    });
  });
});
