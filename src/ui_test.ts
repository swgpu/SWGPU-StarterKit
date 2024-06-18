import Alpine from 'alpinejs'
import { UIWidget } from 'warme-y2k';

class UITest extends UIWidget {
  test: number;

  constructor() {
    super({
      className: 'UITest',
      template: `
      <div x-data="UITest">
        <span>This is a user-interface test</span>
        <button x-on:click="toggle">Toggle</button>
        <template x-if="open">
          <div>Contents...</div>
        </template>
      </div>`
    });

    this.test = 10;
    Alpine.data('UITest', this.initAlpine);
  }

  initAlpine() {
    return {
      open: false,
      status: 'fermé',
      toggle() {
        this.open = ! this.open;
        this.status = this.open ? 'ouvert' : 'fermé';
      }
    }
  }
}

export { UITest };