import Alpine from 'alpinejs'
import { em } from 'warme-y2k';
import { screenManager } from 'warme-y2k';
// ---------------------------------------------------------------------------------------
import { DebugScreen } from './debug_screen';
import { GameScreen } from './game_screen';
// ---------------------------------------------------------------------------------------

Alpine.start();
em.startup();

screenManager.requestSetScreen(new DebugScreen());
// screenManager.requestSetScreen(new GameScreen());