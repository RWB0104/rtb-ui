/**
 * rollup 설정 모듈
 *
 * @author RWB
 * @since 2022.05.11 Wed 13:42:53
 */

import svgr from '@svgr/rollup';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import dts from 'rollup-plugin-dts';
import resolve from 'rollup-plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import typescript from 'rollup-plugin-typescript2';
import url from 'rollup-plugin-url';

import pkg from './package.json';

const extensions = ['js', 'jsx', 'ts', 'tsx'];

process.env.BABEL_ENV = 'production';

const config = [
	{
		external: ['react'],
		input: './src/index.ts',
		output: [
			{
				file: pkg.main,
				format: 'es'
			},
			{
				file: pkg.module,
				format: 'cjs'
			}
		],
		plugins: [
			peerDepsExternal(),
			resolve({ extensions }),
			commonjs({ include: 'node_modules/**' }),
			typescript({ useTsconfigDeclarationDir: true }),
			babel({ extensions, include: ['src/**/*'], runtimeHelpers: true }),
			url(),
			svgr(),
			postcss({
				extract: false,
				modules: true,
				sourceMap: false,
				use: ['sass']
			})
		]
	},
	{
		external: [/\.(sc|sa|c)ss$/],
		input: './src/index.ts',
		output: [{ file: 'dist/index.d.ts', format: 'cjs' }],
		plugins: [dts()]
	}
];

export default config;
