process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const environment = require('./environment')

if (!module.hot) {
  environment.loaders.get('sass').use.find(item => item.loader === 'sass-loader').options.sourceMapContents = false;
}

const config = environment.toWebpackConfig()
config.output.filename = "js/[name]-[hash].js"

module.exports = environment.toWebpackConfig()
