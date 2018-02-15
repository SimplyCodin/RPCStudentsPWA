const OfflinePlugin = require('offline-plugin')
// const DotENV = require('dotenv-webpack')

module.exports = options => ({
	templateCompiler: true,
	copy:[{from:"assets",to:"assets"},{from:"static",to:"static"}],
	extractCSS: false,
	extendWebpack(config) {
		if (process.env.NODE_ENV === 'production'){
			config.plugin('offline')
			.use(OfflinePlugin)
			.options({
				externals: ['https://rpc-students.firebaseio.com']
			})
		}
	},

})