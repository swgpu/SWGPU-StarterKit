import Alpine from 'alpinejs'
// ---------------------------------------------------------------------------------------
import { engineManager } from 'warme-y2k';
import { screenManager } from 'warme-y2k';
// ---------------------------------------------------------------------------------------
import { GameScreen } from './game_screen';
// ---------------------------------------------------------------------------------------

Alpine.start();
engineManager.startup();
screenManager.requestSetScreen(new GameScreen());