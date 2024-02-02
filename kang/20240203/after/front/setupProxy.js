const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://localhost:9292",
            changeOrigin: true,
        })
    );
    app.use(
        "/boardCheck",
        createProxyMiddleware({
            target: "http://localhost:9292", // 스프링 서버
            changeOrigin: true,
        })
    );
    app.use(
        "/boardSearch",
        createProxyMiddleware({
            target: "http://localhost:9292", // 스프링 서버
            changeOrigin: true,
        })
    );
    app.use(
        "/boardCate",
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
    app.use(
        "/cateSearch",
        createProxyMiddleware({
            target: "http://localhost:9292", // 스프링 서버
            changeOrigin: true,
        })
    );
    app.use(
        "/boardCateSearch",
        createProxyMiddleware({
            target: "http://localhost:9292", // 스프링 서버
            changeOrigin: true,
        })
    );
}