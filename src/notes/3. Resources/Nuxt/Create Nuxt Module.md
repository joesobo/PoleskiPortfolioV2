
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️  
> References: [[Nuxt Modules]]  
> Links: https://nuxtjs.org/docs/directory-structure/modules/#write-your-own-module


# `= this.file.name`

A Nuxt Module is just a simple function.

When using a Nuxt Module in your `nuxt.config.js` it can look a little something like this:

```json
export default {
  exampleMsg: 'hello',
  modules: [
    '~/modules/example',
    ['~/modules/example', { token: '123' }]
  ]
}
```

In this example we can see 2 examples of using the `example` module. The first is the most basic design, and the second has a optionally passed argument attached to it. Above all that we can see another option called `exampleMsg` has been attached to the `nuxt.config.js`.

The base nuxt module builds off of this core function:

```jsx
export default function ExampleModule(moduleOptions) {
  console.log(moduleOptions.token); // '123'
  console.log(this.options.exampleMsg); // 'hello'

  this.nuxt.hook("ready", async (nuxt) => {
    console.log("Nuxt is ready");
  });
}
```

#### Module Options

This is the object passed with the module, inside of an array. In the above example it is `token`. The Module options can be accessed via the `moduleOptions` property.

#### this.options

These build directly off of the nuxt options included in the base config. In the above example it is the `exampleMsg`.

It is especially useful for sharing information between modules.

#### this.nuxt

This references the actual Nuxt instance, allowing you to create hooks ontop of the existing life cycle events.

These include

- `Ready` - Nuxt ready to work
- `Error` - Unhandled error in hooks
- `Close` - Nuxt closing gracefully
- `Listen` - Nuxt internally starts listening (`nuxt dev`)

<hr>

This can also be useful for installing Vue Plugins. This exists for modules that utilize more than one plugin. To install plugins use the `this.addPlugin` helper method.

Ex:

```jsx
// plugin.js

import Vue from "vue";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";

Vue.use(BootstrapVue);
```

```jsx
// module.js

import path from "path";

export default function ExampleModule(moduleOptions) {
  this.addPlugin(path.resolve(__dirname, "plugin.js"));
}
```

<hr>

This can also be used to bind with existing Nuxt Modules, say to create a wrapper of an already existing module.

```jsx
// module.js

import path from "path";
import i18nPlugin from "@nuxtjs/i18n";

export default function ExampleModule(moduleOptions) {
  this.addModule(i18nPlugin);
}
```

#### Async Modules

If your module needs to access an API or do any asynchronous operations you probably want to use the async modules. These modules return a Promise like standard async / await.

```jsx
import fse from 'fs-extra'

export default async function ExampleAsyncModule() {
  const pages = await fse.readJson('./pages.json')
  ...
}
```
