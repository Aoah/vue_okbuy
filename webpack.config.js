var ET = require("extract-text-webpack-plugin");
var webpack=require('webpack');

module.exports={
   entry:{
   	app:__dirname+'/src/scripts/app.js'
   },

     //启动sourcemap 方便调试
   devtool:'source-map',
   //启动入口
   output:{
   	     path:__dirname+'/prd',
   	     filename:'bundle.js'
   	     //filename:[name].js
   },
   //启动webserver
   devServer:{
	   	contentBase:__dirname+'/prd',
	   	port:80,
	   	inline:true,
		host:'192.168.191.1',
      proxy:{
           '/rest/*':{
               target:'http://localhost:3000',
               secure:false,
               pathRewrite:{
                   '^/rest':''
               }        //后端接口没有设置好
                        //rest/list  ->http://localhost:8888/list
           }
      }
   },
   //模块配置
   module:{
   	   loaders:[
             {
             	test:/\.css$/,
             	loader:'style!css'
             },{
             	test:/\.js$/,
             	loader:'babel'
             },{
             	test:/\.scss$/,
             	loader:ET.extract('style','css!sass')
             },{
                test:/\.string$/,
                loader:'string'
             },{
                test:/\.vue$/,
                loader:'vue'
             }
   	   ]
   },
     vue:{
      loaders:{
           js:'babel',
           css:ET.extract('vue-style-loader','css','sass')
      }
   },
   // plugins 定义
    plugins:[
         //将scss文件单独经过scss,css 加载器编译后打包到一个单独的文件中bundle.css,
        new ET('bundle.css',{
            allChunks:true
        })
   ]


}
