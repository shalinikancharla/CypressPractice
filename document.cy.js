describe('Documents',()=>
{
    it('document title',()=>
    {
        cy.visit("https://www.amazon.in/")
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.document().should(doc => {
            const titletext=doc.title
             expect(titletext).to.eql('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');
     })
    //by using title

     cy.title().should('eq','Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in');


    })
})