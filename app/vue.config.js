const path = require("path");

module.exports = {
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:3081',
                changeOrigin: true
            },
        }
    },
    pages: {
        index: {
            entry: 'src/web/main.ts',
            template: 'public/index.html',
            title: 'App',
            chunks: ['chunk-vendors', 'any-other-chunk', 'index'],
        },
        admin: {
            entry: 'src/admin/main.ts',
            template: 'public/index.html',
            title: 'Admin',
            chunks: ['chunk-vendors', 'rather-than-package-json', 'admin'],
        },
    },
    configureWebpack: {
        resolve: {
            alias: {
                "@":  path.join(__dirname, "./src"),
                "@c": path.join(__dirname, "./src/web/views/Components"),
                "@p": path.join(__dirname, "./src/web/views/Pages"),
                "@s": path.join(__dirname, "./src/web/styles"),
                'composition-api': 'vue',
            },
        },
    },
}

