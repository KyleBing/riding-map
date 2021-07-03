module.exports = {
  publicPath: './', // css js 文件基于输出目录，而不是网站主目录
  productionSourceMap: false, // 不产出 .map 文件
  outputDir: '../riding-map',
  // configureWebpack:{
  //   devServer:{
  //     port:8081,
  //     open:true,
  //   }
  // },
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://kylebing.cn/dontstarve/',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}