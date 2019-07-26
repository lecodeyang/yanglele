var path = require('path');
var webpack=require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require("vue-loader/lib/plugin");


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './bundle.js'
  },
  devServer:{
    contentBase:'./src',  //设置服务器访问的基本目录
    host:'localhost', //服务器的ip地址
    port:8080,  //端口
    open:true, //自动打开页面
    hot: true
},
module:{
  rules:[
 
    {
      test:/\.css$/,
      use:['style-loader','css-loader']//引入的顺序至关重要,不可改变
    },
    //语法转化 exclude 除了什么之外的转化 否则很耗cpu内存
    {
      test:/\.js$/,
      exclude:/node_modules/,
      use:'babel-loader'
    },
        {//让webpack识别vue模板
          test:/.vue$/,
          loader:'vue-loader'
      }
  ],
},
plugins:[
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
      template: path.join(__dirname,'./src/index.html'),
       //引用这个插件生成模板地址index.html;插件会自动生成html文件并将打包好的js插入文件
      filename:"index.html"
  }),
  new HtmlWebpackPlugin({
    template: path.join(__dirname,'./src/second.html'),
     //引用这个插件生成模板地址index.html;插件会自动生成html文件并将打包好的js插入文件
    filename:"second.html",
    //chunks:[],放入entry引入的js文件样式
}),
new VueLoaderPlugin()
/*webpack打包过后的js等静态文件，要想在这个html使用就要在webpack.config.js中配置插件*/ 
]
};