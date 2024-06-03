import { eventManager } from 'warme-y2k';
import { uiManager } from 'warme-y2k';
import { Screen } from 'warme-y2k';
import { UIMenuText } from 'warme-y2k';
// ---------------------------------------------------------------------------------------

class GameScreen extends Screen {
  constructor() {
    super();
    this.uiMenu = new UIMenuText({ className: 'UIMenuText' });
  }

  async onEnter() {
    this.uiMenu.add('0', 'Lets go !!');
    uiManager.addWidget(this.uiMenu, 'position:absolute; top:50%; left:50%; width:60%; transform:translate(-50%,-50%);');

    eventManager.subscribe(this.uiMenu, 'E_ITEM_SELECTED', this, this.handleMenuItemSelected);
    uiManager.focus(this.uiMenu);
  }

  onExit() {
    uiManager.removeWidget(this.uiMenu);
  }

  handleMenuItemSelected(data) {
    alert('Life is a journey not a destination. Enjoy !');
  }
}

export { GameScreen };