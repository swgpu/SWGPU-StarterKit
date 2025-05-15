import {
    screenManager,
    uiManager,
    em
} from 'swgpu';
// ---------------------------------------------------------------------------------------
import { GameScreen } from './game_screen';
import { UIDebug } from './ui/ui_debug';
// ---------------------------------------------------------------------------------------

em.startup();

const uiDebug = new UIDebug();
uiManager.addWidget(uiDebug, 'position:absolute; top:10px; left:10px;');

screenManager.requestSetScreen(new GameScreen());