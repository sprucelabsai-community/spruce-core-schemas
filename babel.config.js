module.exports = (api) => {
	api.cache(true)

	return {
		ignore: ["**/testDirsAndFiles/**"],
		presets: ['@babel/preset-env', '@babel/preset-typescript'],
		plugins: [
			'@babel/plugin-transform-runtime',
			[
				'@babel/plugin-proposal-decorators',
				{
					legacy: true,
				},
			],
			['@babel/plugin-proposal-class-properties', {loose: true}],
			[
				'module-resolver',
				{
					root: ['./'],
					alias: {
						'#spruce': './src/.spruce',
					},
				},
			],
		],
	}
}
