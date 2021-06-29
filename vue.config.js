const { resolve } = require('path')
module.exports = {
  // 项目部署的基础路径
  publicPath: './',
  // 将构建好的文件输出到哪里
  outputDir: 'dist',
  // 放置静态资源的地方 (js/css/img/font/...)
  assetsDir: 'static',
  // 多页面
  pages: {
    index: {
      entry: 'src/views/main.js',
      template: 'public/index.html',
      // output as dist/index.html
      filename: 'index.html',
      title: 'Index Page'
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    subpage: 'src/subpage/main.js'
  },
  // 生产环境的 source map
  productionSourceMap: false,
  configureWebpack: {},
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/var.scss";`
      }
    }
  },
  devServer: {
    // 为所有服务启用gzip 压缩
    compress: true,
    // 向所有响应添加标头
    headers: {},
    // localhost
    host: '0.0.0.0',
    port: 8080,
    // 启用 webpack 的热模块更换功能
    hot: true,
    // 告诉 dev-server 在服务器启动后打开浏览器
    open: true,
    // 启用 Hot Module Replacement 而不刷新页面作为构建失败时的回退。
    hotOnly: true,
    // proxy: {
      // '/api': {
      //   target: '',
      //   ws: true,
      //   changeOrigin: true
      // }
    // }
  }
}
