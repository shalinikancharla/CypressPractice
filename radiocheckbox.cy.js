/// <reference types="cypress" />

describe("Check UI elements",()=>{
    it(" Checking RadioButton",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.visit("http://rahulshettyacademy.com/dropdownsPractise/")
        cy.get("input#ctl00_mainContent_rbtnl_Trip_0").should('be.visible'); //checking the radio button is visible or not
        cy.get("input#ctl00_mainContent_rbtnl_Trip_0").check().should('be.checked');//check that is it selected or not
        cy.get("#ctl00_mainContent_rbtnl_Trip > tbody > tr > :nth-child(2) > label").should('not.be.checked')//check that is it selected or not
        
    })
    it(" Checking Checkboxes",()=>{
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false
          })
        cy.visit("http://rahulshettyacademy.com/dropdownsPractise/")
        //visibility of the element
        //cy.get("#ctl00_mainContent_chk_friendsandfamily").should('be.visible');  
        //selecting the check box       
        //cy.get("#ctl00_mainContent_chk_friendsandfamily").check().should('be.checked');
        //unselect the check box
        //cy.get("#ctl00_mainContent_chk_friendsandfamily").uncheck().should('not.be.checked')

        //selecting all checkboxes
        //cy.get("div#discount-checkbox>div.fleft>input[type='checkbox']").check().should('be.checked')

     //deselecting all checkboxes
     //cy.get("div#discount-checkbox>div.fleft>input[type='checkbox']").uncheck().should('not.be.checked')

     //select first checkbox
     cy.get("div#discount-checkbox>div.fleft>input[type='checkbox").first().check();
     cy.get("div#discount-checkbox>div.fleft>input[type='checkbox").last().check();
    cy.get("div#discount-checkbox>div.fleft>input[type='checkbox").check();


     

        
    })
})