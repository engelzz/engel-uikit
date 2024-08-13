import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.stories.{ts,tsx}',
    'src/styles/index.css',
    'tailwind.config.ts'
  ],
  minify: true,
  format: ['cjs', 'esm'],
  outDir: 'dist',
  sourcemap: false,
  clean: true,
  dts: true,
  tsconfig: 'tsconfig.build.json',
});
