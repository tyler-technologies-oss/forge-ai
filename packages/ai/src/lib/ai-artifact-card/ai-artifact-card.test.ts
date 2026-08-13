import { expect } from '@esm-bundle/chai';
import { fixture, html } from '@open-wc/testing';
import { AiArtifactCardComponent, ForgeAiArtifactCardOpenEventData } from './ai-artifact-card';

import './ai-artifact-card';

describe('AiArtifactCard', () => {
  it('should contain shadow root', async () => {
    const el = await fixture<AiArtifactCardComponent>(html`<forge-ai-artifact-card></forge-ai-artifact-card>`);

    expect(el.shadowRoot).to.be.ok;
  });

  it('should render the title and subtitle text', async () => {
    const el = await fixture<AiArtifactCardComponent>(
      html`<forge-ai-artifact-card title-text="Crash totals" subtitle-text="2024 collisions"></forge-ai-artifact-card>`
    );

    expect(el.shadowRoot?.querySelector('.title')?.textContent).to.contain('Crash totals');
    expect(el.shadowRoot?.querySelector('.subtitle')?.textContent).to.contain('2024 collisions');
  });

  it('should emit the open event with the asset id when clicked', async () => {
    const el = await fixture<AiArtifactCardComponent>(
      html`<forge-ai-artifact-card asset-id="abcd-1234"></forge-ai-artifact-card>`
    );
    const details: ForgeAiArtifactCardOpenEventData[] = [];
    el.addEventListener('forge-ai-artifact-card-open', evt => details.push(evt.detail));

    el.shadowRoot?.querySelector<HTMLButtonElement>('.artifact-card')?.click();

    expect(details).to.have.lengthOf(1);
    expect(details[0].assetId).to.equal('abcd-1234');
  });

  it('should emit an open event that crosses the shadow boundary and bubbles', async () => {
    const el = await fixture<AiArtifactCardComponent>(
      html`<div><forge-ai-artifact-card asset-id="abcd-1234"></forge-ai-artifact-card></div>`
    );
    const card = el.querySelector<AiArtifactCardComponent>('forge-ai-artifact-card');
    let received = 0;
    el.addEventListener('forge-ai-artifact-card-open', () => received++);

    card?.shadowRoot?.querySelector<HTMLButtonElement>('.artifact-card')?.click();

    expect(received).to.equal(1);
  });

  it('should not emit the open event when disabled', async () => {
    const el = await fixture<AiArtifactCardComponent>(html`<forge-ai-artifact-card disabled></forge-ai-artifact-card>`);
    let received = 0;
    el.addEventListener('forge-ai-artifact-card-open', () => received++);

    el.shadowRoot?.querySelector<HTMLButtonElement>('.artifact-card')?.click();

    expect(received).to.equal(0);
  });

  it('should disable the internal button when disabled', async () => {
    const el = await fixture<AiArtifactCardComponent>(html`<forge-ai-artifact-card disabled></forge-ai-artifact-card>`);

    const button = el.shadowRoot?.querySelector<HTMLButtonElement>('.artifact-card');

    expect(button?.disabled).to.be.true;
  });

  it('should reflect the active property to an attribute', async () => {
    const el = await fixture<AiArtifactCardComponent>(html`<forge-ai-artifact-card></forge-ai-artifact-card>`);

    el.active = true;
    await el.updateComplete;

    expect(el.hasAttribute('active')).to.be.true;
  });

  it('should render slotted icon and action content', async () => {
    const el = await fixture<AiArtifactCardComponent>(
      html`<forge-ai-artifact-card>
        <svg slot="icon"></svg>
        <span slot="action">Open results</span>
      </forge-ai-artifact-card>`
    );

    const iconSlot = el.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="icon"]');
    const actionSlot = el.shadowRoot?.querySelector<HTMLSlotElement>('slot[name="action"]');

    expect(iconSlot?.assignedElements()).to.have.lengthOf(1);
    expect(actionSlot?.assignedElements()[0].textContent).to.equal('Open results');
  });

  it('should use a native button so keyboard activation works', async () => {
    const el = await fixture<AiArtifactCardComponent>(html`<forge-ai-artifact-card></forge-ai-artifact-card>`);

    const button = el.shadowRoot?.querySelector<HTMLButtonElement>('.artifact-card');

    expect(button?.tagName).to.equal('BUTTON');
    expect(button?.type).to.equal('button');
  });
});
