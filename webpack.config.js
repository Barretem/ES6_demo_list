/**
 * 测试webpack配置
 * @author barret
 * @data 2018/03/11
 */
const path = require('path');

// 引入接口代理配置文件
const proxyConfig = require('./config/config.proxy.js');

// 引入dev-server配置文件
const serverConfig = require('./config/config.server.js');

module.exports = {
    // 配置服务器s
    devServer: {
        contentBase: path.resolve(__dirname, './src'), // New
        port: serverConfig.port,
        host: serverConfig.host,
        proxy: proxyConfig,
        historyApiFallback: true,
        compress: true,
        inline: false,
        hot: false,
        stats: {
            assets: true,
            children: false,
            chunks: false,
            hash: false,
            modules: false,
            publicPath: false,
            timings: true,
            version: false,
            warnings: true,
            colors: {
                green: '\u001b[32m',
            }
        },
    },
}