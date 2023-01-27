import React from 'react'
import {Example} from '@/client/components/example'



describe('<Example />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Example />)
    cy.get('input').type('5')
    cy.get('[data-test-id="total"]').should('have.text', '10')
  })
})
