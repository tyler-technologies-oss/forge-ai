import { html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

@customElement('forge-a2ui-text')
export class ForgeA2uiText extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: contents;
    }
    .forge-typography-h1 {
      font-size: var(--forge-typography-headline1-font-size, 96px);
      font-weight: var(--forge-typography-headline1-font-weight, 300);
      line-height: var(--forge-typography-headline1-line-height, 112px);
    }
    .forge-typography-h2 {
      font-size: var(--forge-typography-headline2-font-size, 60px);
      font-weight: var(--forge-typography-headline2-font-weight, 300);
      line-height: var(--forge-typography-headline2-line-height, 72px);
    }
    .forge-typography-h3 {
      font-size: var(--forge-typography-headline3-font-size, 48px);
      font-weight: var(--forge-typography-headline3-font-weight, 400);
      line-height: var(--forge-typography-headline3-line-height, 56px);
    }
    .forge-typography-h4 {
      font-size: var(--forge-typography-headline4-font-size, 34px);
      font-weight: var(--forge-typography-headline4-font-weight, 400);
      line-height: var(--forge-typography-headline4-line-height, 40px);
    }
    .forge-typography-h5 {
      font-size: var(--forge-typography-headline5-font-size, 24px);
      font-weight: var(--forge-typography-headline5-font-weight, 400);
      line-height: var(--forge-typography-headline5-line-height, 32px);
    }
    .forge-typography-caption {
      font-size: var(--forge-typography-caption-font-size, 12px);
      font-weight: var(--forge-typography-caption-font-weight, 400);
      line-height: var(--forge-typography-caption-line-height, 20px);
    }
    .forge-typography-body {
      font-size: var(--forge-typography-body1-font-size, 16px);
      font-weight: var(--forge-typography-body1-font-weight, 400);
      line-height: var(--forge-typography-body1-line-height, 24px);
    }
  `;

  protected override render(): TemplateResult {
    const text = this.resolveValue<string>(this.props.text) ?? '';
    const variant = (this.props.variant as string) ?? 'body';
    const className = `forge-typography-${variant}`;

    return html`<span class=${className}>${text}</span>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-text': ForgeA2uiText;
  }
}
