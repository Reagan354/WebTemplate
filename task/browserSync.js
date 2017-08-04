// BrowserSync
module.exports = function (gulp, plugins, json) {
    return function () {
        console.log(json.host);
        plugins.browserSync.init({
            server: {
                baseDir: "dist"
            },
            port: 8080,
            open: false,
            notify: false,
            logLevel: "info",
            tunnel: true
        });
    };
};
