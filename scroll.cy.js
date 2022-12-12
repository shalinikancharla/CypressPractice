/// <reference types="cypress" />

describe('scroll demo',()=>{
    it('scrolling to desired content',()=>{
        cy.visit("https://www.amazon.in/s?k=mobiles&crid=S23JPLW4KS19&sprefix=mobiles%2Caps%2C305&ref=nb_sb_noss_1")
       // cy.xpath("//span[normalize-space()='Related searches']").scrollIntoView()
        cy.contains("Redmi 10A (Sea Blue, 4GB RAM, 64GB Storage) | 2 Ghz Octa Core Helio G25 | 5000 mAh Battery | Finger Print Sensor | Upto 5GB RAM with RAM Booster")
        .scrollIntoView().should('be.visible');
        cy.wait(3000)
        //scroll to
        cy.scrollTo(0,300)
        //cy.pause()
    
        //cy.scrollTo('center')
        cy.scrollTo('right')
        cy.wait(3000)
        cy.scrollTo('bottom', { easing:'linear' })
        
        cy.scrollTo('top', { duration: 2000 })
        cy.wait(2000)
        //we can give scrollTo with text ,but it is identifing the element only,not scroll viewed
        //cy.get(".nav-logo-base.nav-sprite:last-child").scrollTo('bottom',{ensureScrollable: false})


    })
})