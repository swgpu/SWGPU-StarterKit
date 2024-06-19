import { gfx2TextureManager, uiManager } from 'warme-y2k';
import { Gfx2SpriteJSS, Tween, Screen, UT } from 'warme-y2k';
// ---------------------------------------------------------------------------------------
import { UITest } from './ui_test';
// ---------------------------------------------------------------------------------------

class GameScreen extends Screen {
  uiTest: UITest;
  logo: Gfx2SpriteJSS;
  animation: Tween<vec2>;

  constructor() {
    super();
    this.uiTest = new UITest();
    this.logo = new Gfx2SpriteJSS();
    this.animation = new Tween<vec2>();
  }

  async onEnter() {
    uiManager.addWidget(this.uiTest, 'position:absolute; top:20px; left:50%; transform:translate(-50%,-50%);');

    this.logo.setTexture(await gfx2TextureManager.loadTexture('./textures/logo.png'));
    this.logo.setOffsetNormalized(0.5, 0.5);

    this.animation = new Tween<vec2>([0, 4, 8], [[-250, 0], [250, 0], [-250, 0]], UT.EASE_IN_OUT_QUAD);
    this.animation.setLooped(true);
  }

  update(ts: number) {
    this.logo.update(ts);
    this.animation.update(ts);

    this.logo.setPosition(this.animation.get(0), this.animation.get(1));
  }

  draw() {
    this.logo.draw();
  }
}

export { GameScreen };