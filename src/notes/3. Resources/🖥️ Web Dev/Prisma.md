
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References: [[🖥️ Web Dev]]   
> Links: https://www.prisma.io/

- ORM - (object relational mapping)
- declarative schema definition language
	- write data relationships in human readable way
- schema can be inferred from existing data
- converts schema into type definitions
	- allows Type safe CRUD operations with your database
	- this means IDE autocompletion tailored to your schema

Example:
```ts
// Find all posts
const allPosts: Post[] = await prisma.post.findMany()
```