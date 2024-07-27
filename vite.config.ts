import wasm from 'vite-plugin-wasm';
import FullReload from 'vite-plugin-full-reload';

export default {
  plugins: [
		wasm(),
    FullReload(['public/**'])
  ],
	build: {
    target: 'esnext',
    rollupOptions: {
      treeshake: false,
    }
  }  
}
