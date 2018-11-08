``` bash
├── root                                      // 图片上传所存在的区域
├── src
│   ├── config                                // 将所有的路由放入一个index.js存入，然后抛出，以便我们请求
│   │   ├── router.js                         // 所有的路由文件的接口
│   ├── modules                               // mysql的连接以及他的查询文件
│   │   ├── config.js                         // mysql的连接
│   │   ├── user.js                           // 编写所有的接口                       
│   ├── routers                               // 所有路由存放的位置
│   │   └── checkUser.js                      // 登录
│   │   └── Upload.js                         // 上传图片
│   ├── untils                                // 一些公共文件的放置
│   │   └── crypto.js                         // 在登录的时候，我用到了crypto的加密以及解密。
│   │   └── proof.js                          // 关于登录和后续进入所有页面的设置
│   ├── app.js                                // express的引入以及挂载，使用了express最常用的中间键以及引用了我登入页面的所有设置和路由的传入
├── .babelrc                                  // 这个配置文件是针对babel 6的。Babel 6做了一系列模块化，不像Babel 5一样把所有的内容都加载。比如需要编译ES6，我们需要设置presets为"es2015"，也就是预先加载es6编译的相关模块，如果需要编译jsx，需要预先加载"react"这个模块。
