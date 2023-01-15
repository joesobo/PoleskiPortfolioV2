
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References:   [[🖥️ Web Dev]]
> Links: https://zod.dev/

Schema validation library with TS support

- define types once in schema
	- infer type from schema

Example:
```ts
const schema = z.string()

schema.parse("tuna") //true
schema.parse(12) //false
```

Advanced Example:
```ts
const UserSchema = z.object({
	name: z.string()
})

UserSchema.parse({ name: 'Joe' })

type User = z.infer<typeof UserSchema>
```