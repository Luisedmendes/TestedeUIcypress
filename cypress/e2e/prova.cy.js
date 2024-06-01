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

  it('Filtering a computer', () => {
    let infos = criarPC()
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#searchbox').click()
    cy.get('#searchbox').type(infos[0])
    cy.get('#searchsubmit').click()
  })
})

function criarPC(){
  let name = "Acer"
  let date1 = "2021-01-01"
  let date2 = "2021-01-02"
  let comp = "IBM"
  let infos = [name, date1, date2, comp]

  cy.visit('https://computer-database.gatling.io/computers')
  cy.get('#add').click()
  cy.get('#name').type(name)
  cy.get('#introduced').type(date1)
  cy.get('#discontinued').type(date2)
  cy.get('#company').select(comp)
  cy.get('.primary').click()
  cy.get('.alert-message').should('contain.text', 'Done !  Computer Acer has been created')
  return infos
}