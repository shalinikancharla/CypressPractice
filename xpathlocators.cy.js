describe("XPATH locators",()=>{
    it("find no of products",() => {

        cy.visit("https://www.amazon.com/");
        cy.xpath("//input[@id='twotabsearchtextbox']").type("mobiles")
        cy.xpath("//input[@id='nav-search-submit-button']").click();
        cy.xpath("//ol/li").should('have.length',9)


    })
}
)