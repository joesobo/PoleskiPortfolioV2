
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References:   [[🖥️ Web Dev]]
> Links: https://mswjs.io/

Mock intercepted requests. Allows reusing the same mocks between testing, dev, and debugging.

- runs with service workers
- occurs when app performs http request
- returns mocked response
- application knows nothing about the mocking (thinks its the real data)

Example:
```ts
import { setupWorker, graphql } from 'msw'

interface Variables {
  username: string
}

interface Response {
  username: string
  firstName: string
}

const worker = setupWorker(
  graphql.mutation<Response, Variables>('Login', (req, res, ctx) => {
    const { username } = req.variables
    return res(
      ctx.data({
        user: {
          username,
          firstName: 'John'
        }
      })
    )
  })
)

worker.start()
```







