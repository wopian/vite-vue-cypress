import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('Renders', () => {
    cy.mount(HelloWorld, {
      props: {
        msg: 'Test Message'
      }
    })

    cy.get('h1').should('contain', 'Test Message')
  })
})
