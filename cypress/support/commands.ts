/// <reference types="cypress" />

import { mount } from 'cypress/vue'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      mount: typeof mount
      vue: typeof Cypress.vueWrapper
    }
  }
}

Cypress.Commands.add('mount', mount)

Cypress.Commands.add('vue', () => cy.wrap(Cypress.vueWrapper))
