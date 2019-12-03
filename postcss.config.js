module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
      //iphone6 适配屏幕
      viewportWidth: 375, //视窗宽度 设计稿宽度
      viewportHeight: 667, //视窗高度 设计稿高度
      unitPrecision: 5, //指定px转换后小数点后保留位数
      viewportUnit: 'vw', //指定转换成的视窗单位,建议'vw'
      selectorBlackList: [], //指定不需要转换的类(类名class)
      exclude: [], //指定不需要转换的文件(文件名)正则表达式
      minPixelValue: 1, //指定小于或等于该数值不转换的单位大小
      mediaQuery: false //允许媒体中查询转换px
    }
  }
}
