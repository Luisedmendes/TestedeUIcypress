/// <reference types="cypress" />

describe('Create a computer', () => {
  it('Should be able to create a computer', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#add').click()
    cy.get('#name').type('Computer Test')
    cy.get('#introduced').type('2021-01-01')
    cy.get('#discontinued').type('2021-01-02')
    cy.get('#company').select('IBM')
    cy.get('.primary').click()
    cy.get('.alert-message').should('contain.text', 'Done !  Computer Computer Test has been created')
  })
  
  it('Should not be able to create a computer without name', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#add').click()
    cy.get('#introduced').type('2021-01-01')
    cy.get('#discontinued').type('2021-01-02')
    cy.get('#company').select('IBM')
    cy.get('.primary').click()
    cy.get('.error > .input > .help-inline').should('contain.text', 'Failed to refine type : Predicate isEmpty() did not fail.')    
  })
})