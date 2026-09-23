import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { TemplateResult } from 'lit';
import { AiArtifactCardGroupComponent, ForgeAiArtifactCardGroupToggleEventData } from './ai-artifact-card-group';
import { AiArtifactCardComponent } from './ai-artifact-card';

import './ai-artifact-card';
import './ai-artifact-card-group';

function cardsTemplate(count: number): TemplateResult[] {
  return Array.from(
    { length: count },
    (_, index) => html`<forge-ai-artifact-card title-text="Card ${index + 1}"></forge-ai-artifact-card>`
  );
}

function getCards(el: AiArtifactCardGroupComponent): AiArtifactCardComponent[] {
  return Array.from(el.querySelectorAll('forge-ai-artifact-card'));
}

function getToggle(el: AiArtifactCardGroupComponent): HTMLButtonElement | null | undefined {
  return el.shadowRoot?.querySelector<HTMLButtonElement>('.toggle');
}

describe('AiArtifactCardGroup', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AiArtifactCardGroupComponent>(
      html`<forge-ai-artifact-card-group></forge-ai-artifact-card-group>`
    );

    expect(el.shadowRoot).to.be.ok;
  });

  it('should not render the toggle when every card fits', async () => {
    const el = await fixture<AiArtifactCardGroupComponent>(
      html`<forge-ai-artifact-card-group>${cardsTemplate(3)}</forge-ai-artifact-card-group>`
    );

    expect(getToggle(el)).to.not.exist;
    expect(getCards(el).every(card => !card.hidden)).to.be.true;
  });

  it('should hide cards past the visible count while collapsed', async () => {
    const el = await fixture<AiArtifactCardGroupComponent>(
      html`<forge-ai-artifact-card-group>${cardsTemplate(5)}</forge-ai-artifact-card-group>`
    );

    const hidden = getCards(el).map(card => card.hidden);

    expect(hidden).to.deep.equal([false, false, false, true, true]);
  });

  it('should label the toggle with the number of hidden cards', async () => {
    const el = await fixture<AiArtifactCardGroupComponent>(
      html`<forge-ai-artifact-card-group>${cardsTemplate(5)}</forge-ai-artifact-card-group>`
    );

    expect(getToggle(el)?.textContent?.trim()).to.equal('2 more');
    expect(getToggle(el)?.getAttribute('aria-expanded')).to.equal('false');
  });

  it('should show every card and the show less label when the toggle is clicked', async () => {
    const el = await fixture<AiArtifactCardGroupComponent>(
      html`<forge-ai-artifact-card-group>${cardsTemplate(5)}</forge-ai-artifact-card-group>`
    );

    getToggle(el)?.click();
    await el.updateComplete;

    expect(el.expanded).to.be.true;
    expect(getCards(el).every(card => !card.hidden)).to.be.true;
    expect(getToggle(el)?.textContent?.trim()).to.equal('Show less');
    expect(getToggle(el)?.getAttribute('aria-expanded')).to.equal('true');
  });

  it('should emit the toggle event with the new expanded state', async () => {
    const el = await fixture<AiArtifactCardGroupComponent>(
      html`<forge-ai-artifact-card-group>${cardsTemplate(5)}</forge-ai-artifact-card-group>`
    );
    const details: ForgeAiArtifactCardGroupToggleEventData[] = [];
    el.addEventListener('forge-ai-artifact-card-group-toggle', evt => details.push(evt.detail));

    getToggle(el)?.click();
    await el.updateComplete;
    getToggle(el)?.click();
    await el.updateComplete;

    expect(details).to.deep.equal([{ expanded: true }, { expanded: false }]);
  });

  it('should respect a custom visible count', async () => {
    const el = await fixture<AiArtifactCardGroupComponent>(
      html`<forge-ai-artifact-card-group visible-count="1">${cardsTemplate(3)}</forge-ai-artifact-card-group>`
    );

    const hidden = getCards(el).map(card => card.hidden);

    expect(hidden).to.deep.equal([false, true, true]);
    expect(getToggle(el)?.textContent?.trim()).to.equal('2 more');
  });

  it('should use custom toggle labels', async () => {
    const el = await fixture<AiArtifactCardGroupComponent>(
      html`<forge-ai-artifact-card-group show-more-text="Voir {count} de plus" show-less-text="Voir moins">
        ${cardsTemplate(4)}
      </forge-ai-artifact-card-group>`
    );

    const collapsedLabel = getToggle(el)?.textContent?.trim();
    getToggle(el)?.click();
    await el.updateComplete;

    expect(collapsedLabel).to.equal('Voir 1 de plus');
    expect(getToggle(el)?.textContent?.trim()).to.equal('Voir moins');
  });

  it('should add the toggle when cards are appended past the visible count', async () => {
    const el = await fixture<AiArtifactCardGroupComponent>(
      html`<forge-ai-artifact-card-group>${cardsTemplate(3)}</forge-ai-artifact-card-group>`
    );

    el.append(document.createElement('forge-ai-artifact-card'));
    await new Promise(resolve => setTimeout(resolve));
    await el.updateComplete;

    expect(getToggle(el)?.textContent?.trim()).to.equal('1 more');
    expect(getCards(el)[3].hidden).to.be.true;
  });

  it('should expose the cards as a list', async () => {
    const el = await fixture<AiArtifactCardGroupComponent>(
      html`<forge-ai-artifact-card-group>${cardsTemplate(2)}</forge-ai-artifact-card-group>`
    );

    expect(el.shadowRoot?.querySelector('.list')?.getAttribute('role')).to.equal('list');
    expect(getCards(el).every(card => card.getAttribute('role') === 'listitem')).to.be.true;
  });
});
