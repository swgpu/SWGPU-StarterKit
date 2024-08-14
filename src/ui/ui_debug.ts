import { UIWidget } from 'swgpu';

class UIDebug extends UIWidget {
  constructor() {
    super({
      className: 'UIDebug',
      template: `
      <div>
        <span class="UIDebug-enabled">Debug enabled: <span>
        <button class="js-debug-toggle">Toggle</button>
      </div>`
    });

    const btn = this.node.querySelector('.js-debug-toggle')!;
    btn.addEventListener('click', this.handleDebugToggle.bind(this));
  }

  update() {
    const debugBtn = this.node.querySelector('.js-debug-toggle')!;
    const debugEnabled = localStorage.getItem('debugEnabled');
    debugBtn.textContent = debugEnabled == '0' ? 'false' : 'true';
  }

  handleDebugToggle() {
    const value = localStorage.getItem('debugEnabled');
    localStorage.setItem('debugEnabled', value != '0' ? '0' : '1');
    location.reload();
  }
}

export { UIDebug };