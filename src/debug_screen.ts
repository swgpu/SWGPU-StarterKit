import { em, Pack3D } from 'swgpu';
import { gfx3DebugRenderer } from 'swgpu';
import { gfx3MeshRenderer } from 'swgpu';
import { UT } from 'swgpu';
import { Screen } from 'swgpu';
import { Gfx3CameraWASD } from 'swgpu';
// ---------------------------------------------------------------------------------------

class DebugScreen extends Screen {
  camera: Gfx3CameraWASD;
  pack: Pack3D;

  constructor() {
    super();
    this.camera = new Gfx3CameraWASD(0);
    this.pack = new Pack3D();
  }

  async onEnter() {
    this.camera.setPosition(0, 0, 10);
    this.pack = await em.loadPack3D('./scene.blend.pak');

    const cameraPosition = localStorage.getItem('cameraPosition');
    if (cameraPosition) {
      const data = JSON.parse(cameraPosition);
      this.camera.setPosition(data[0], data[1], data[2]);
    }

    const cameraRotation = localStorage.getItem('cameraRotation');
    if (cameraRotation) {
      const data = JSON.parse(cameraRotation);
      this.camera.setRotation(data[0], data[1], data[2]);
    }
  }

  update(ts: number) {
    this.camera.update(ts);
    this.pack.jam.forEach(item => item.object.update(ts));
    this.pack.jsm.forEach(item => item.object.update(ts));
    this.pack.jas.forEach(item => item.object.update(ts));
    this.pack.jss.forEach(item => item.object.update());
    this.pack.jwm.forEach(item => item.object.update());
    this.pack.jnm.forEach(item => item.object.update(ts));
    this.pack.jlm.forEach(item => item.object.update(ts));
    this.pack.jsv.forEach(item => item.object.update(ts));

    localStorage.setItem('cameraPosition', JSON.stringify(this.camera.getPosition()));
    localStorage.setItem('cameraRotation', JSON.stringify(this.camera.getRotation()));
  }

  draw() {
    this.pack.jam.forEach(item => item.object.draw());
    this.pack.jsm.forEach(item => item.object.draw());
    this.pack.jas.forEach(item => item.object.draw());
    this.pack.jss.forEach(item => item.object.draw());
    this.pack.jwm.forEach(item => item.object.draw());
    this.pack.jnm.forEach(item => item.object.draw());
    this.pack.jsv.forEach(item => item.object.draw());
    gfx3MeshRenderer.setAmbientColor([0.5, 0.5, 0.5]);
    gfx3DebugRenderer.drawGrid(UT.MAT4_ROTATE_X(Math.PI * 0.5), 20, 1);
  }
}

export { DebugScreen };