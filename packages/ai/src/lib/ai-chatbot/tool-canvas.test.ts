import { expect } from '@open-wc/testing';
import { resolveToolCanvasActionLabel, resolveToolCanvasIcon, resolveToolCanvasTitle } from './tool-canvas.js';
import type { ToolCall, ToolDefinition } from './types.js';

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ReportArgs = { kind: string };

const toolCall: ToolCall<ReportArgs> = {
  id: 'call-1',
  messageId: 'msg-1',
  name: 'report',
  args: { kind: 'report' },
  status: 'complete',
  type: 'client'
};

function definition(canvas: ToolDefinition<ReportArgs>['canvas']): ToolDefinition<ReportArgs> {
  return { name: 'report', displayName: 'Report', canvas };
}

describe('tool-canvas', () => {
  describe('resolveToolCanvasIcon', () => {
    it('should return undefined when no icon is configured', () => {
      expect(resolveToolCanvasIcon(toolCall, definition({}))).to.be.undefined;
    });

    it('should clone an element icon so each card gets its own node', () => {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      const icon = resolveToolCanvasIcon(toolCall, definition({ icon: svg }));

      expect(icon).to.be.instanceOf(SVGElement);
      expect(icon).to.not.equal(svg);
    });

    it('should resolve an icon from a function of the tool call', () => {
      const icon = resolveToolCanvasIcon(
        toolCall,
        definition({ icon: tc => (tc.args.kind === 'report' ? '<svg><circle r="1"/></svg>' : '<svg><rect/></svg>') })
      );

      expect(icon?.querySelector('circle')).to.be.ok;
    });

    it('should keep only allowlisted elements and attributes from markup', () => {
      const markup = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" onload="alert(1)" class="x">
          <script>alert(1)</script>
          <style>path { fill: red }</style>
          <set attributeName="onmouseover" to="alert(1)"></set>
          <foreignObject><body onload="alert(1)"></body></foreignObject>
          <use href="javascript:alert(1)"></use>
          <a href="javascript:alert(1)"><path d="M0 0h24v24H0z" fill="currentColor" onclick="alert(1)"/></a>
          <g transform="rotate(45)"><circle cx="12" cy="12" r="4"/></g>
        </svg>`;

      const icon = resolveToolCanvasIcon(toolCall, definition({ icon: markup }));
      const names = [...(icon?.querySelectorAll('*') ?? [])].map(el => el.localName);

      expect(icon?.getAttribute('viewBox')).to.equal('0 0 24 24');
      expect(icon?.hasAttribute('onload')).to.be.false;
      expect(icon?.hasAttribute('class')).to.be.false;
      expect(names).to.deep.equal(['g', 'circle']);
      expect(icon?.querySelector('g')?.getAttribute('transform')).to.equal('rotate(45)');
    });

    it('should return undefined for markup without a root svg', () => {
      expect(resolveToolCanvasIcon(toolCall, definition({ icon: '<div>nope</div>' }))).to.be.undefined;
    });
  });

  describe('labels', () => {
    it('should fall back to displayName for the title and default action labels', () => {
      const def = definition({});

      expect(resolveToolCanvasTitle(toolCall, def)).to.equal('Report');
      expect(resolveToolCanvasActionLabel(toolCall, def, false)).to.equal('Open in canvas');
      expect(resolveToolCanvasActionLabel(toolCall, def, true)).to.equal('Collapse canvas');
    });

    it('should resolve action labels from a function of the tool call', () => {
      const def = definition({
        actionLabel: tc => ({ open: `Open ${tc.args.kind}`, collapse: `Collapse ${tc.args.kind}` })
      });

      expect(resolveToolCanvasActionLabel(toolCall, def, false)).to.equal('Open report');
      expect(resolveToolCanvasActionLabel(toolCall, def, true)).to.equal('Collapse report');
    });
  });
});
