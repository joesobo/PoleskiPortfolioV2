
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️ #📜️
> References: [[🖥️ Web Dev]]


# Webpack Cheatsheet

[https://webpack.js.org/](https://webpack.js.org/)

Used to bundle variety of different files into simple static assets

- Use a `webpack.config.js` to describe how webpack should bundle your files
- Internally builds a dependency graph that combines all modules into bundles
- Core Concepts

  - **Entry**

    - where webpack should start building dependency graph
    - figures out how other modules connect

    ```json
    entry: './path/to/my/entry/file.js'
    ```

  - **Output**

    - where to emit the bundle created and how to name

    ```json
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'my-first-webpack.bundle.js',
    }
    ```

  - **Loaders**

    - webpack only understands .js and .JSON files
    - loaders allow webpack to process other files (.css /.svg)
    - processes files into valid modules and added to dependency graph
    - `test` property ids files
    - `use` property ids which loader to use

    ```json
    module: {
      rules: [{ test: /\\.txt$/, use: 'raw-loader' }],
    },
    ```

  - **Plugins**

    - Used to perform wide range of tasks
    - Can optimize bundling, manage assets, or inject env variables
    - plugins need to be `reuire()` to use in plugins array

    ```json
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
    	plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
    }
    ```

    Ex: above creates a HTML file and injects bundles into this file

    - List of plugins:
      [https://webpack.js.org/plugins/](https://webpack.js.org/plugins/)

  - **Mode**
    - can use webpacks built in automation for each environment
    - `development`
    - `production`
    - `none`
