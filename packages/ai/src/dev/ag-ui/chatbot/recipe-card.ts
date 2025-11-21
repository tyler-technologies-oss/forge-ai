import { LitElement, html, css, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import type { ToolCall } from '../../../lib/ai-chatbot';
import styles from './recipe-card.scss?inline';

interface RecipeData {
  title: string;
  description?: string;
  prepTime: string;
  cookTime: string;
  servings: number;
  ingredients: string[];
  instructions: string[];
}

@customElement('recipe-card')
export class RecipeCard extends LitElement {
  static styles = unsafeCSS(styles);

  @property({ attribute: false })
  public toolCall!: ToolCall;

  render() {
    // For pure rendering tools, data comes from LLM via args, not result
    const data = this.toolCall.args as unknown as RecipeData;
    if (!data) {
      return html`<forge-card><p class="forge-typography--body2">No recipe data available</p></forge-card>`;
    }

    return html`
      <forge-card>
        <forge-toolbar>
          <h2 class="forge-typography--heading4" slot="start">${data.title}</h2>
        </forge-toolbar>

        ${data.description ? html`
          <p class="forge-typography--body2 recipe-description">${data.description}</p>
        ` : ''}

        <div class="recipe-meta">
          <div class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <span class="forge-typography--label2">Prep: ${data.prepTime}</span>
          </div>
          <div class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
            </svg>
            <span class="forge-typography--label2">Cook: ${data.cookTime}</span>
          </div>
          <div class="meta-item">
            <svg class="meta-icon" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
            </svg>
            <span class="forge-typography--label2">Servings: ${data.servings}</span>
          </div>
        </div>

        <div class="recipe-section">
          <h3 class="forge-typography--subheading4 section-title">Ingredients</h3>
          <forge-list>
            ${data.ingredients.map(ingredient => html`
              <forge-list-item>
                <span class="forge-typography--body2">${ingredient}</span>
              </forge-list-item>
            `)}
          </forge-list>
        </div>

        <div class="recipe-section">
          <h3 class="forge-typography--subheading4 section-title">Instructions</h3>
          <ol class="instructions-list">
            ${data.instructions.map(instruction => html`
              <li class="forge-typography--body2">${instruction}</li>
            `)}
          </ol>
        </div>
      </forge-card>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'recipe-card': RecipeCard;
  }
}
