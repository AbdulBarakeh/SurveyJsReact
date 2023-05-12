const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    "mode": "development",
    "entry": "./src/index.js",
    "output": {
        "path": __dirname + '/dir',
        "filename": "bundle.js"
    },
    "devtool": "source-map",
    "module": {
        "rules": [
            {
                "enforce": "pre",
                "test": /\.js$/,
                "exclude": /node_modules/,
                "loader": "eslint-loader",
                "options": {
                  "emitWarning": true,
                  "failOnError": false,
                  "failOnWarning": false
                }
            },
            {
                "test": /\.(js|jsx)$/,
                "exclude": /node_modules/,
                "use": {
                    "loader": "babel-loader"
                }
            },
            {
                "test": /\.(scss)$/,
                "use": [
                    {
                        // Adds CSS to the DOM by injecting a `<style>` tag
                        loader: 'style-loader'
                      },
                      {
                        // Interprets `@import` and `url()` like `import/require()` and will resolve them
                        loader: 'css-loader'
                      },
                      {
                        // Loader for webpack to process CSS with PostCSS
                        loader: 'postcss-loader',
                        options: {
                          postcssOptions: {
                            plugins: () => [
                              autoprefixer
                            ]
                          }
                        }
                      },
                      {
                        // Loads a SASS/SCSS file and compiles it to CSS
                        loader: 'sass-loader'
                      }
                ]
            },
            {
                "test": /\.html$/,
                "use": [
                    {
                        "loader": "html-loader"
                    }
                ]
            }
        ]
    },
    "plugins": [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
}