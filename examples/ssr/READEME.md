# San-Loader 配置实例（ssr）

这里是一个简单的 san-ssr 示例项目，演示了如何在 ssr 项目中分别在客户端和服务端配置 san-loader。

## 开始使用

安装依赖：

```bash
npm install
```

打包客户端和服务端代码：

```bash
npm run build
```

开始运行：

```bash
npm run start
```

## 目录结构

```shell
ssr
├── build
│   ├── webpack.client.config.js # 客户端 webpack 配置
│   └── webpack.server.config.js # 服务端 webpack 配置
├── dist
│   ├── client_bundle.js         # 客户端打包后代码
│   ├── client_bundle.js.map
│   ├── server_bundle.js         # 服务端打包后代码
│   └── server_bundle.js.map
├── server.js                    # express 服务启动代码
└── src
    ├── App.san                  # 组件
    ├── entry-client.js          # 客户端代码，主要用于客户端激活
    └── entry-server.js          # 服务端代码，主要在用于引入 App.san 交给 san-ssr 处理
```
