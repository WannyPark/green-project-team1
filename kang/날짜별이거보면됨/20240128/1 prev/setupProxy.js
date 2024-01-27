// setupProxy.js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/boardCheck",
        createProxyMiddleware({
            target: "http://localhost:9292", // 스프링 서버
            changeOrigin: true,
        })
    );

    app.use(
        "/getHit",
        createProxyMiddleware({
            target: "http://localhost:9292", // 스프링 서버
            changeOrigin: true,
        })
    );

    app.use(
        "/getPaginatedList",
        createProxyMiddleware({
            target: "http://localhost:9292", // 스프링 서버
            changeOrigin: true,
        })
    );
};
