# cypress-cucumber

## cypress

<https://docs.cypress.io/guides/getting-started/installing-cypress>

## typeScript

<https://docs.cypress.io/guides/tooling/typescript-support>

## cypress with typescript

<https://docs.cypress.io/guides/tooling/typescript-support>

## cypress-cucumber-preprocessor

<https://github.com/badeball/cypress-cucumber-preprocessor>

## esbuild

<https://github.com/bahmutov/cypress-esbuild-preprocessor>

## cypress-cucumber-preprocessor with esbuild and typescript

<https://github.com/badeball/cypress-cucumber-preprocessor/tree/master/examples/esbuild-ts>

## best practices

<https://docs.cypress.io/guides/references/best-practices>

- Organizing Tests, Logging In, Controlling State

  - Test specs in isolation, programmatically log into your application, and take control of your application's state

- Selecting Elements

  - Use data-\* attributes to provide context to your selectors and isolate them from CSS or JS changes

- Assigning Return Values

  - Use aliases and closures to access and store what Commands yield you

- Visiting External Sites

  - Only test websites that you control
  - Try to avoid visiting or requiring a 3rd party server
  - If you choose, you may use cy.request() to talk to 3rd party servers via their APIs
  - If possible, cache results via cy.session() to avoid repeat visits

- Having Tests Rely On The State Of Previous Tests

  - Tests should always be able to be run independently from one another and still pass

- Creating "Tiny" Tests With A Single Assertion

  - Add multiple assertions and don't worry about it

- Using after Or afterEach Hooks

  - Clean up state before tests run

- Unnecessary Waiting

  - Use route aliases or assertions to guard Cypress from proceeding until an explicit condition is met

- Web Servers

  - Start a web server prior to running Cypress

- Setting a Global baseUrl

  - Set a baseUrl in your Cypress configuration
