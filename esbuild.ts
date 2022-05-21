// @ts-ignore
const {build} = require('esbuild')
const {pkg} = require('./package.json')
const {nodeExternalsPlugin} = require('esbuild-node-externals')


const dependencies = [...Object.keys(pkg?.dependencies ?? {})];
const peerDependencies = [...Object.keys(pkg?.dependencies ?? {})];

const shared = {
  entryPoints: ['src/index.ts'],
  bundle: true,
  external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
  logLevel: 'info',
  minify: true,
  sourcemap: true,
  // splitting: true,  Splitting currently only works with the "esm" format
  watch: process.env.NODE_ENV === 'development',
  plugins: [nodeExternalsPlugin()],
}

build({
  ...shared,
  splitting: true,
  outdir: 'dist/esm',
  format: 'esm',
  target: 'esnext',
})

build({
  ...shared,
  splitting: false,
  outdir: 'dist/cjs',
  format: 'cjs',
  target: 'esnext',
})

