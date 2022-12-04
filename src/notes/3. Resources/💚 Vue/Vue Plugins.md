
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️ #📜️
> References: [[💚 Vue]] [[Plugin]]


# Plugins

A Vue plugin is essentially an object wrapping around an `install()` function. `Vue.use()` registers the plugin and executes the install function.

- Add global functionality
- use plugin by calling `Vue.use()` before `new Vue()`
- ex: vue-router or vue-touch

```jsx
Vue.use(MyPlugin, { options: true });
```

- plugins should expose an `install` method

```jsx
MyPlugin.install = function (Vue, options) {};
```

- Types
  1.  Add global methods / properties
  2.  Add global assets
  3.  Add component options
  4.  Add Vue instance methods
  5.  Library with API of its own
