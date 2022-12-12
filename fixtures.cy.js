/// <reference types="cypress" />
let testData



describe('Login to OrangeHRM website', function () {
     before( ()=> {
        
         //cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.fixture('example').then(function (data) {
            this.testData = data
        })
})
    it('Fixture',()=>{
                cy.visit("https://admin-demo.nopcommerce.com/login")
                cy.get("#Email").type(this.testData.email)
                cy.get("#Password").type()
                cy.get('.button-1 ').click()
            })
            
        })