
describe('handling dropdowns',()=>{
    it.skip('Dropdown with select',()=>{
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        //select the country and check the value is correct or not
        cy.get("#zcf_address_country").select('India').should('have.value','India')

    })
    it.skip('Dropdown without select',()=>{
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        //select the bo
        cy.get("#select2-billing_country-container").click()
        cy.get(".select2-search__field").type("Italy").type('{enter}')

       //do the Assertions for country-->here have.text will be used for without select Dd
       cy.get("#select2-billing_country-container").should('have.text','Italy')

       
    })

    it.skip('Autosuggestive Dropdowns',()=>{
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type('Delhi')
        cy.wait(3000)
        //cy.get('.suggestion-title').contains("Delhi Captial").click();
        cy.get('.suggestion-title').each(($el,index,$list)=>{ //each is a jQuery function
            if($el.text()=='Delhi Captial'){
                cy.wrap($el).click()
            }
        })

      
})
it('Dynamic Dropdowns',()=>{
    cy.visit("https://www.google.com/")
    cy.get("input[name='q']").type('cypress automation')
    cy.wait(3000)
    cy.get("div.wM6W7d>span").should('have.length',11)


    cy.get('div.wM6W7d>span').each(($el,index,$list)=>{
        //$el is a Wrapped JQuery element
        if($el.text()=='cypress automation tutorial'){
            cy.wrap($el).click()

        }

    })
          //assertion
      cy.get("input[name='q']").should('have.value','cypress automation tutorial') 

})
  
})