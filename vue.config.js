const px2rem = require('postcss-px2rem')

const postcss = px2rem({
  remUnit: 32
})

// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true
// })

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            // postcss
            require('postcss-px2rem')({
              remUnit: 16
            })
          ]
        }
      }
    }
  }
}
