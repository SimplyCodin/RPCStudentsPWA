const OfflinePlugin = require('offline-plugin')

module.exports = options => ({
	templateCompiler: true,
	extendWebpack(config) {
		if (process.env.NODE_ENV === 'production'){
			config.plugin('offline')
			.use(OfflinePlugin)
		}
	},

})