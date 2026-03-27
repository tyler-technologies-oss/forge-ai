import { LitElement, TemplateResult, html, unsafeCSS, nothing, type PropertyValues } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import {
  defineCardComponent,
  definePaginatorComponent,
  defineTableComponent,
  defineToolbarComponent,
  type IColumnConfiguration,
  type IPaginatorChangeEventData
} from '@tylertech/forge';

import styles from './reporting-table.scss?inline';

defineCardComponent();
defineToolbarComponent();
defineTableComponent();
definePaginatorComponent();

@customElement('reporting-table')
export class ReportingTableComponent extends LitElement {
  public static override styles = unsafeCSS(styles);

  @property({ type: String }) public header = '';
  @property({ type: String }) public description = '';
  @property({ type: Array }) public data: Record<string, unknown>[] = [];
  @property({ type: Array }) public columns: IColumnConfiguration[] = [];
  @property({ type: Number }) public pageSize = 10;
  @property({ type: Boolean, reflect: true }) public loading = false;

  @state() private _pageIndex = 0;

  #tableRef: HTMLElement | null = null;

  get #showPaginator(): boolean {
    return this.data.length > this.pageSize;
  }

  get #pagedData(): Record<string, unknown>[] {
    if (!this.#showPaginator) {
      return this.data;
    }
    const start = this._pageIndex * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  }

  protected override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('data') || changedProperties.has('columns') || changedProperties.has('pageSize') || changedProperties.has('_pageIndex')) {
      if (changedProperties.has('data')) {
        this._pageIndex = 0;
      }
      this.#updateTable();
    }
  }

  #updateTable(): void {
    if (this.#tableRef) {
      (this.#tableRef as any).data = this.#pagedData;
      (this.#tableRef as any).columnConfigurations = this.columns;
    }
  }

  protected override firstUpdated(): void {
    this.#tableRef = this.renderRoot.querySelector('forge-table');
    this.#updateTable();
  }

  #handlePageChange(evt: CustomEvent<IPaginatorChangeEventData>): void {
    this._pageIndex = evt.detail.pageIndex;
  }

  public override render(): TemplateResult {
    return html`
      <forge-card ?inert=${this.loading}>
        <forge-toolbar>
          <h2 class="forge-typography--heading5" slot="start">${this.header}</h2>
        </forge-toolbar>
        <p class="description forge-typography--body2">${this.description}</p>
        <forge-table></forge-table>
        ${this.#showPaginator
          ? html`
              <forge-toolbar no-divider>
                <forge-paginator
                  slot="end"
                  .pageIndex=${this._pageIndex}
                  .pageSize=${this.pageSize}
                  .total=${this.data.length}
                  .pageSizeOptions=${[this.pageSize]}
                  @forge-paginator-change=${this.#handlePageChange}>
                </forge-paginator>
              </forge-toolbar>
            `
          : nothing}
        <div class="loading-overlay"></div>
      </forge-card>
    `;
  }
}
