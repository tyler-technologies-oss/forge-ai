import { expect } from '@esm-bundle/chai';
import DOMPurify from 'dompurify';
import { renderInlineMarkdown, renderMarkdown } from './markdown.js';

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

      it('should render an outside image inside a link as alt text to avoid nesting links', () => {
        const html = render(`[![status](https://${OUTSIDE_HOST}/p.png)](https://example.com/page)`);
        const links = parse(html).querySelectorAll('a');

        expect(fetchingReferences(html)).to.deep.equal([]);
        expect(links.length).to.equal(1);
        expect(links[0].getAttribute('href')).to.equal('https://example.com/page');
        expect(links[0].textContent).to.equal('status');
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
        ['svg mask image-set()', `<svg><rect mask="image-set('https://${OUTSIDE_HOST}/a.png' 1x)"></rect></svg>`],
        [
          'svg mask image-set(attr())',
          `<svg><path title="https://${OUTSIDE_HOST}/a.png" mask="image-set(attr(title) 1x)"></path></svg>`
        ],
        ['mathml mglyph', `<math><mi><mglyph src="https://${OUTSIDE_HOST}/a.png" alt="g"></mglyph></mi></math>`],
        ['style url()', `<div style="background-image:url(https://${OUTSIDE_HOST}/a.png)">x</div>`],
        ['background attribute', `<table background="https://${OUTSIDE_HOST}/a.png"><tr><td>x</td></tr></table>`],
        ['input type=image', `<input type="image" src="https://${OUTSIDE_HOST}/a.png">`]
      ].forEach(([label, content]) => {
        it(`should strip raw HTML that would fetch on render: ${label}`, () => {
          expect(fetchingReferences(render(content))).to.deep.equal([]);
        });
      });

      it('should drop svg and mathml elements', () => {
        expect(parse(render('<svg><rect></rect></svg><math><mi>x</mi></math>')).querySelector('svg, rect, math, mi')).to
          .be.null;
      });
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
    it(`should keep an allowed ${label} image inline`, () => {
      const img = parse(renderMarkdown(`![chart](${src})`, { streaming: false })).querySelector('img');

      expect(img?.getAttribute('src')).to.equal(src);
      expect(img?.getAttribute('alt')).to.equal('chart');
    });
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

  it('should not affect the global DOMPurify instance', () => {
    renderMarkdown(`![status](https://${OUTSIDE_HOST}/p.png)`, { streaming: false });

    const img = parse(
      DOMPurify.sanitize('<img src="https://cdn.example.com/logo.png" style="width:10px">')
    ).querySelector('img');

    expect(img?.getAttribute('src')).to.equal('https://cdn.example.com/logo.png');
    expect(img?.getAttribute('style')).to.equal('width:10px');
  });
});
