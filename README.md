## React Boilerplate

### Getting Started

1. clone this repo
2. cd into folder
3. `npm install`
4. `npm start`
5. auto open http://yourIP:9000 (not localhost or 127.0.0.1 , for mobile test)

### 代码规范检查
```
npm run lint
```
采用eslint对js代码进行检查，配置文件为.eslintrc.json ，可以参考官方文档[eslint](http://eslint.org/)

### 编译打包
会在dist文件中输出合并后的js，css文件。
```
npm run deploy
```


### 代理设置
采用webpack-dev-server作为开发服务器之后，如果需要请求后台人员提供的api接口，那么就会存在跨域的问题，因此需要设置webpack-dev-server的代理服务器，将webpack-dev-server服务器的一个path映射到api服务器。请更改server.js文件中的new WebpackDevServer 第二个参数的proxy属性，示例如下：
```
// /api/* 会映射 http://example.com:3000/api/* ，如 /api/users 映射 http://example.com:3000/api/users
new WebpackDevServer(webpack(config), {
  proxy : {
    '/api/*' : {
      target : 'http://example.com:3000'// 
    }
  }
  
})
```


### 开发注意事项
目前对于在js中引入大于30KB的图片，即通过以下代码引入的方式是不支持的，原因是和后台的整合过程中，路径问题还没有一个很好的解决方案，因此建议超过30KB的图片在css文件中引入。
```javascript
//目前请不要在javascript中按照如下方式引入图片,请使用css
var url = require('large-img.png')
var img = new Image
img.src = url
```

### 打包完成之后与后台整合
在dist命令完成之后，会在dist文件夹中生成打包的文件，包括 index,js,css以及图片字体等文件，请按照index.html的模板方式引入，head里面引入css文件，body底部引入js文件。个人建议把打包后的静态资源文件都放在后台项目的bundles文件夹中（index.html可以不需要）。