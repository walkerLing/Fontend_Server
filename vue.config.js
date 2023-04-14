const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭语法检查
  lintOnSave: false,
  // 开启代理服务器
  // devServer:{
    // proxy:'http://fruit.mingbyte.com:55001'
//     proxy: {
//       '/api': {
//           target: 'http://fruit.mingbyte.com:55001',
//           changeOrigin: true,
//           pathRewrite: {
//             '^/api': ''
//           }
//       }
//   }
// }
})
