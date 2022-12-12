before(()=>{
    console.log('Running View port tests')
})
beforeEach(()=>{
    cy.visit("https://www.google.com")
})
it('open in macbook - 13',()=>{
    cy.viewport('macbook-13');
    cy.screenshot();
    cy.wait(200)
})
it('open in macbook - 15',()=>{
    cy.viewport('macbook-15');
    cy.screenshot();
    cy.wait(200)
})
it('open in iphone - 3',()=>{
    cy.viewport(350,480);
    cy.screenshot();
    cy.wait(200)
})