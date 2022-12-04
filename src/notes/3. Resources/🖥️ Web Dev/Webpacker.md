
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️ #📜️  
> References: [[🖥️ Web Dev]] [[Ruby]]


# Webpacker Cheatsheet

[https://edgeguides.rubyonrails.org/webpacker.html](https://edgeguides.rubyonrails.org/webpacker.html)

A Rails wrapper for webpack

- Comes with built in config and defaults
- manages js, css, and static assets
- combines code into packs
- Attaching

  Example:

```ruby
<%= javascript_pack_tag "application" %>
```

### Other Tags

- Attach JS
  - `javascript_pack_tag`
- Attach CSS
  - `stylesheet_pack_tag`
- Link Image
  - `image_pack_tag`
- Link Asset
  - `asset_pack_tag`
- Require Script
  - `import / require`
