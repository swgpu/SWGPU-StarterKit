import wasm from 'vite-plugin-wasm';

export default {
  plugins: [
		wasm()
  ],
	build: {
    target: 'esnext',
    rollupOptions: {
      treeshake: false,
    }
  }  
}
