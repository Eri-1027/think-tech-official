module.exports = {
  productionSourceMap: false,
  transpileDependencies: [
    'vuetify'
  ],
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "~@/scss/variables.scss";'
      }
    },
    sourceMap: false
  }
  // configureWebpack: {
  //   devServer: {
  //     proxy: {
  //       '/api': process.env.VUE_APP_APIPATH
  //     }
  //   }
  // }
}
