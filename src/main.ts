import { em } from 'swgpu';
import { screenManager, uiManager } from 'swgpu';
// ---------------------------------------------------------------------------------------
import { DebugScreen } from './debug_screen';
import { GameScreen } from './game_screen';
import { UIDebug } from './ui/ui_debug';
// ---------------------------------------------------------------------------------------

em.startup();

const uiDebug = new UIDebug();
uiManager.addWidget(uiDebug, 'position:absolute; top:10px; left:10px;');

if (localStorage.getItem('debugEnabled') == '1') {
  screenManager.requestSetScreen(new DebugScreen());
}
else {
  screenManager.requestSetScreen(new GameScreen());
}