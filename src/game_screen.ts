import { uiManager } from 'warme-y2k';
import { Screen } from 'warme-y2k';
import { UITest } from './ui_test';
// ---------------------------------------------------------------------------------------

class GameScreen extends Screen {
  uiTest: UITest;

  constructor() {
    super();
    this.uiTest = new UITest();
  }

  async onEnter() {
    uiManager.addWidget(this.uiTest, 'position:absolute; top:50%; left:50%; width:60%; transform:translate(-50%,-50%);');
  }
}

export { GameScreen };