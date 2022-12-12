describe('misc commands',()=>{
    it('launch url',()=>{
        cy.visit("https://example.cypress.io/commands/misc")
    })
    it('end method',()=>
    {
        cy.get('.table.table-bordered.misc-table').within(()=>{
            cy.contains('Charles').click().end()
            cy.contains('Darryl').click()


        })
    })
    it('focused',()=>{
        cy.get('.misc-form').find('#name').click()
        //do assertion
        cy.focused().should('have.id','name')
    })

})