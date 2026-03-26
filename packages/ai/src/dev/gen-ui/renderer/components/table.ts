import { html, css, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ForgeA2uiElement } from '../forge-a2ui-element.js';

interface ColumnConfig {
  header: string;
  property: string;
  sortable?: boolean;
  align?: 'left' | 'center' | 'right';
}

interface A2uiAction {
  type: string;
  payload?: Record<string, unknown>;
}

@customElement('forge-a2ui-table')
export class ForgeA2uiTable extends ForgeA2uiElement {
  static override styles = css`
    :host {
      display: block;
    }
  `;

  protected override render(): TemplateResult {
    const data = this.resolveValue<Record<string, unknown>[]>(this.props.data) ?? [];
    const columns = this.resolveValue<ColumnConfig[]>(this.props.columns) ?? [];
    const dense = this.resolveValue<boolean>(this.props.dense) ?? false;
    const select = this.resolveValue<boolean>(this.props.select) ?? false;

    const columnConfigurations = columns.map(col => ({
      header: col.header,
      property: col.property,
      sortable: col.sortable ?? false,
      align: col.align ?? 'left'
    }));

    return html`
      <forge-table
        ?dense=${dense}
        ?select=${select}
        .data=${data}
        .columnConfigurations=${columnConfigurations}
        @forge-table-row-click=${this.#handleRowClick}
        @forge-table-select=${this.#handleSelect}
      ></forge-table>
    `;
  }

  #handleRowClick(event: CustomEvent): void {
    const action = (this.props.rowClickAction ?? this.props.action) as A2uiAction | undefined;
    if (action) {
      const payload = { ...action.payload, rowData: event.detail.data, rowIndex: event.detail.index };
      this.dispatchA2uiAction({ ...action, payload });
    }
  }

  #handleSelect(event: CustomEvent): void {
    const action = this.props.onSelect as A2uiAction | undefined;
    if (action) {
      const payload = { ...action.payload, selected: event.detail.selected, rowData: event.detail.data };
      this.dispatchA2uiAction({ ...action, payload });
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'forge-a2ui-table': ForgeA2uiTable;
  }
}
