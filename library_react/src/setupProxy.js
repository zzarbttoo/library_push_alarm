const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app){

    app.use(
        createProxyMiddleware("/api", {
            target : "http://localhost:3000", //통신 서버 도메인 주소, api로 호출
            changeOrigin: true,
        })
    );
}