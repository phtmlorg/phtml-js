module.exports = {
	'basic': {
		message: 'supports basic usage',
		options: {
			presets: [
				['@babel/env', {
					loose: true,
					modules: false,
					targets: 'last 2 versions, not dead',
					useBuiltIns: 'entry'
				}]
			]
		}
	},
	'basic:attrs': {
		message: 'supports { sourceMapAttributes: true } option',
		options: {
			sourceMapAttributes: true,
			presets: [
				['@babel/env', {
					loose: true,
					modules: false,
					targets: 'last 2 versions, not dead',
					useBuiltIns: 'entry'
				}]
			]
		}
	},
	'basic:nosource': {
		message: 'supports { processOption } override',
		options: {
			presets: [
				['@babel/env', {
					loose: true,
					modules: false,
					targets: 'last 2 versions, not dead',
					useBuiltIns: 'entry'
				}]
			],
			transformOptions: {}
		}
	}
};
