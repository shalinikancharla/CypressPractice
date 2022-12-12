describe('location commands',()=>{
    it('launch url',()=>{
        cy.visit("https://www.google.com")
       console.log (cy.hash())
       //cy.hash().should('eq', '#/users/1') // => test will fail
       cy.hash().should('eq', '') // => return empty string
       cy.location('host').should('contain','www.google.com')
       cy.location('pathname').should('include', '/')
       //cy.go('forward')
       cy.go(1)
       cy.reload()


       


    })
})