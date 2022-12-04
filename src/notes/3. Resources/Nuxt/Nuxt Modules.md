
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️  
> References: [[Nuxt]]  
> Links: https://modules.nuxtjs.org/


# `= this.file.name`

Nuxt Modules are a package like system that make it possible to extend the core functionality of Nuxt. They are basically functions that are called when Nuxt first starts. These functions can access Nuxt's options, [[Hooks]] or lifecycle methods, and run asynchronously.

There is a [list of all the public Nuxt modules](https://modules.nuxtjs.org/) that you can use to easily integrate features into your application. These include modules like eslint, typescript support, and svg loading. There are currently over **160** modules.

#### How Modules Work:

![[Nuxt Modules.png]]

#### <hr>

#### Modules vs. BuildModules

Modules are the main source of interaction with the Nuxt framework. If you need to make modifications to Nuxt, it will likely be as a normal module.

BuildModules are for developer dependency type stuff. This is stuff that the client will never see, but is useful for development.

#### Modules vs. Plugins

Most Nuxt Modules are often wrappers around [[Nuxt Plugin|Nuxt Plugins]] . And most [[Nuxt Plugin|Nuxt Plugins]] are wrappers around [[Vue Plugins]].

The difference between the two is about the order in which they run.

1. Nuxt starts
2. Build Modules
3. Modules
4. Plugins

This gives the modules more customization and power. It even allows them to install plugins, since they install later in the pipeline.

#### <hr>

#### Creating a Module

To start creating a module first reference the image above to see if Nuxt Modules can do what you want. Check with `Modules vs. BuildModules` and `Modules vs. Plugins` also to ensure that your module couldnt be better suited in another area.

Follow this guide to start writing your own [[Create Nuxt Module]]
