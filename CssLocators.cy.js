//const cypress=require("cypress")
describe('Css selectors',()=>{
    it('cssselectors',()=>{
        cy.visit("https://www.amazon.com/");
        cy.get("#twotabsearchtextbox").type("christmascards"); //select the item in search bar
        cy.get("#nav-search-submit-button").click(80,75);//click on the item
        cy.get(".a-color-state.a-text-bold").contains("chris")//Assertions with text span[class*='a-color-state']

    })
})