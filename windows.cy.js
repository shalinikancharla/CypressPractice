describe('windows handling',()=>{
    it.skip('get the global window object',()=>{
        cy.visit("https://www.amazon.in/")
        cy.window().should('have.property', 'top')

    })
    it('launch url',()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
    
        cy.visit("https://the-internet.herokuapp.com/windows"); //Parent Tab
    })
    it.skip('Child Tabs Approach 1',()=>{ //here we remove the target attribute by using invoke method,
        //so it will open in same window not in new window
        cy.get('.example a').invoke('removeAttr','target').click();
        //Assertion of child tab
        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000)
        //switch to the parent tab
        cy.go('back')
    })
    it('Child Tabs Approach 2',()=>{
        //by using href attribute
        cy.get('.example a').then((e) => {
            let url=e.prop('href') //By using jquery function get the url

            //open url in parent tab
            cy.visit(url)
            cy.get()
            cy.go(back)
        })
        //Do assertions
        // cy.url().should('include','https://the-internet.herokuapp.com/windows/new')
        // cy.wait(5000)
        // //switch to the parent tab
        // cy.go('back')

        

    })
})