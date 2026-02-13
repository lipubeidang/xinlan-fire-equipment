const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'assets',
  productionSourceMap: false,
  
  devServer: {
    port: 8080,
    open: true,
    host: '0.0.0.0',
    allowedHosts: 'all'
  },

  css: {
    loaderOptions: {
      css: {
        // CSS 相关配置
      }
    }
  }
})

