import * as esbuild from 'esbuild'
import {BuildOptions} from 'esbuild'
import pkg from './package.json'
import {nodeExternalsPlugin} from 'esbuild-node-externals'


const dependencies = [...Object.keys(pkg?.dependencies ?? {})];
const peerDependencies = [...Object.keys(pkg?.dependencies ?? {})];

const shared: BuildOptions = {
    entryPoints: ['src/index.ts'],
    bundle: true,
    external: [...Object.keys(dependencies), ...Object.keys(peerDependencies)],
    logLevel: 'info',
    minify: true,
    sourcemap: true,
    watch: process.env.NODE_ENV === 'development',
    tsconfig: "tsconfig.build.json",
    plugins: [nodeExternalsPlugin()],
}

esbuild.build({
    ...shared,
    splitting: true,
    outdir: 'dist/esm',
    format: 'esm',
    target: 'esnext',
})


esbuild.build({
    ...shared,
    splitting: false,
    outdir: 'dist/cjs',
    format: 'cjs',
    target: 'esnext',
})

