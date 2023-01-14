declare namespace Cypress {
  interface Chainable<Subject> {
      /**
       * Creates one Todo using UI
       * cy.login('token', 'userId')
       */
      login(token: string, userId: string): Chainable<any>
  }
}
