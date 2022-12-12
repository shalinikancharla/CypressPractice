
describe('Trigger events',()=>{
    it('launch url',()=>{
        cy.visit("https://www.amazon.in/")

    })
    it('Mouse over',()=>{
        cy.get('#nav-tools a').eq(1).trigger("mouseover")
        cy.get('.nav-text').contains('Your Account').click()
    })

    it('Mouse down',()=>{
        //cy.visit("https://www.amazon.in/")
        cy.get('#nav-tools a').eq(1).trigger("mouseover")
        cy.get('.nav-text').contains('Your Wish List',{force: true} ).click()
        //MouseDown occurs when the user presses the mouse button
        cy.get('.action-inner').trigger('mousedown')
        cy.wait(2000)
        //MouseUp occurs when the user releases the mouse button
        cy.get('.action-inner').trigger('mouseup')
    })
    it('Right click',()=>{
        //cy.visit("https://www.amazon.in/")
        
        cy.get('#nav-xshop a.nav-a:nth-of-type(3)').trigger('contextmenu').should('be.visible')
        //cy.get('#nav-xshop a.nav-a:nth-of-type(3)').rightclick()

    })
})