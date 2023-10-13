const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app){
    app.use(
        createProxyMiddleware('/bigdata',{
            target: 'http://localhost:8283/bigdata',
            pathRewrite: {
                '^/bigdata':''
            },
            changeOrigin: true
        })
    )


}