
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References: [[Testing]] [[end-to-end]]
> Links:


# `= this.file.name`

A tool for reliably testing anything that runs in a web browser. Primarily used for end-to-end testing.

Comes with Desktop app and CLI tool.

### Fresh Install

`npx cypress open` - run cypress and opens the gui (on first time it will generate cypress folder structure)

#### Main folders

- fixtures (common data to use in tests)
- integration (tests)
- plugins (external JS tasks)
- support (bundles tests)

### GUI

Shows all of the spec tests files. Any of these files can be run by themselves or as a group.

On the right side of the GUI you can see an iframe displaying the UI of your application as it runs through the tests. Everything else is the command log that shows you every test and every command within that test.

The command log allows you to time travel through the tests to easily travel to broken points / debugging.

It also can display additional information about commands run via the dev tools.

### API

A chaining API that passes a subject through out the chain of commands. For example button would be a subject. Runs deterministically (in order).

`cy.<command>` - use a cypress command

`cy.get('button')` - grabs a button

`cy.get('button').click().should('have.class', 'active')` - grabs a button and clicks on it then tests its class

`cy.request('/users/1')` - grab from a API endpoint

### Common Commands

`cy.visit()` - goes to a page

`cy.get()` - grabs content

`cy.location()` - location within the application (like path)

`cy.task()` - executes JS on system outside browser (like clearing db)

- created within the `plugins` folder

`cy.window()` - gets the current window

`cy.server()` - start server to pass request to (required for stubbing)

`cy.route()` - describes response server for server (for mocking)

- can be used for testing error scenarios in routes for better testing coverage

`cy.wait()` - waits for response from request to server

### Custom Commands

Cypress offers a command API that we can extend off of to create custom commands. This is very useful for bundling commonly used commands together (example: login process)

Custom commands should be created within the `support` folder

```js
Cypress.Commands.add('login', (email, pass) => {
	...
	cy.get(...)
	cy.get('button').click()
})
```

`cy.login('testemail', 'testpass')`

### Stubbing

Bad idea to test APIs in testing environment (should already be tested)

Instead we can create a stub or mock server to use as our API. Start with `cy.server` and create endpoints with `cy.route`

### CI

Cant just run the Cypress desktop app.
Headless Mode (run through command line)

`npx cypress run`

- creates run video recording for reviewing

Can be run with `--parallel` flag to optimize distribution of test files to enable parallelization.

### Dashboard

Optional service to record results of test runs for collaborating as a team. Free for open source projects.

Shows:

- test number
- date
- time taken
- passing/failing tests
- environment
