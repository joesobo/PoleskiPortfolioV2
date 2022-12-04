
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️ #📜️
> References: [[🖥️ Web Dev]]


# Rollup Cheatsheet

(https://rollupjs.org/guide/en/)[https://rollupjs.org/guide/en/]

A module bundler which compiles pieces of code into an application

Uses standard ES6

- Tree-Shaking
  - analyzes code and excludes unused files
- Config

  - Base Config

    ```json
    // rollup.config.js

    // can be an array (for multiple inputs)
    export default {
      // core input options
      external,
      input, // conditionally required
      plugins,

      // advanced input options
      cache,
      onwarn,
      preserveEntrySignatures,
      strictDeprecations,

      // danger zone
      acorn,
      acornInjectPlugins,
      context,
      moduleContext,
      preserveSymlinks,
      shimMissingExports,
      treeshake,

      // experimental
      experimentalCacheExpiry,
      perf,

      // required (can be an array, for multiple outputs)
      output: {
        // core output options
        dir,
        file,
        format, // required
        globals,
        name,
        plugins,

        // advanced output options
        assetFileNames,
        banner,
        chunkFileNames,
        compact,
        entryFileNames,
        extend,
        footer,
        hoistTransitiveImports,
        inlineDynamicImports,
        interop,
        intro,
        manualChunks,
        minifyInternalExports,
        outro,
        paths,
        preserveModules,
        preserveModulesRoot,
        sourcemap,
        sourcemapExcludeSources,
        sourcemapFile,
        sourcemapPathTransform,
        validate,

        // danger zone
        amd,
        esModule,
        exports,
        externalLiveBindings,
        freeze,
        indent,
        namespaceToStringTag,
        noConflict,
        preferConst,
        sanitizeFileName,
        strict,
        systemNullSetters
      },

      watch: {
        buildDelay,
        chokidar,
        clearScreen,
        skipWrite,
        exclude,
        include
      }
    };
    ```

  - optional but recommended
  - called `rollup.config.js`
  - can be written as a CommonJS module if extension is `.cjs` which prevents rollup transpiling
    - `.mjs` will import file as ES module instead
    - [](https://rollupjs.org/guide/en/#using-untranspiled-config-files)[https://rollupjs.org/guide/en/#using-untranspiled-config-files](https://rollupjs.org/guide/en/#using-untranspiled-config-files)
  - Can export array from config to build bundles from several inputs

    ```json
    export default [
    	{
    		input: 'main-a.js',
        output: {
          file: 'dist/bundle-a.js',
          format: 'cjs'
        }
    	},
      {
        input: 'main-b.js',
        output: [
          {
            file: 'dist/bundle-b1.js',
            format: 'cjs'
          },
          {
            file: 'dist/bundle-b2.js',
            format: 'es'
          }
        ]
      }
    ]
    ```

- Example

  ```json
  export default {
    input: 'src/main.js',
    output: {
      file: 'bundle.js',
      format: 'cjs'
    }
  };
  ```

- Plugins

  - Change rollup behavior at key points in bundling
  - List of plugins: [](https://github.com/rollup/awesome)[https://github.com/rollup/awesome]

  ```json
  import json from '@rollup/plugin-json';

  export default {
    input: 'src/main.js',
    output: {
      file: 'bundle.js',
      format: 'cjs'
    },
    plugins: [json()]
  };
  ```

  - Building plugins: [](https://rollupjs.org/guide/en/#plugin-development)[https://rollupjs.org/guide/en/#plugin-development]
