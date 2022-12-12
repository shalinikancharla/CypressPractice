
//const cypress=require("cypress")
describe('suite name', () => {

  it('verify positive test', () => {
    cy.visit('https://www.zemosolabs.com/') //verify url
    cy.title().should('eq','Determine your product market fit rapidly & cost-effectively with Zemoso Technologies') //verify text
  })
  it('verify negitive test', () => {
    cy.visit('https://www.zemosolabs.com/')
    //console.log(cy.title())
    cy.title().should('eq','Zemoso123')
  })

})