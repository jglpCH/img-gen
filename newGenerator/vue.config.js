//vue.config.js
module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "jGLP Bildgenerator";
                return args;
            })
    },

    css: {
        loaderOptions: {
          sass: {
            prependData: `@import "@/css/_variables.scss";`
          }
        }
      },

    pluginOptions: {
      i18n: {
        locale: 'de',
        fallbackLocale: 'de',
        localeDir: 'locales',
        enableInSFC: false
      }
  },
    
  publicPath: process.env.NODE_ENV === 'production'
  ? ''
  : '/'
}
