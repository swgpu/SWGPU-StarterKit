import FullReload from 'vite-plugin-full-reload';
import topLevelAwait from 'vite-plugin-top-level-await';

export default {
  plugins: [
    FullReload(['public/**']),
    topLevelAwait()
  ],
	build: {
    target: 'esnext',
    rollupOptions: {
      treeshake: false,
    }
  }  
}
