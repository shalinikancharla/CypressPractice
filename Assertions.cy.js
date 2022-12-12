// const {describe} =require("mocha")
describe("Assertions Demo",()=>{
    it("Implicit Assertions",()=> {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        //should,and
        // cy.url().should('include','orangehrmlive.com')//search the sub text
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // cy.url().should('contain','orangehrm')

        cy.url().should('include','orangehrmlive.com')//search the sub text
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .should('contain','orangehrm')

        //and keyword
        cy.url().should('include','orangehrmlive.com')//search the sub text
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','orangehrm123')//negative assertion

        //logo
        // cy.get('.orangehrm-login-branding > img').should('be.visible')
        // cy.get('.orangehrm-login-branding > img').should('exist')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')
        
        //capture all the links
        cy.xpath("//a").should('have.length',5)

        //check the uername as valid or not

        cy.get("input[placeholder='Username']").type("Admin")//provide a value into inbox
        .should('have.value','Admin')

    })
    it("Explicit Assertions",()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        //check the dynamic user name
        let expectedName="PaulFirst nameKerri CollingsLast jhgfJoseph"
         cy.get(".oxd-userdropdown-tab").then((x)=>{
           let actualName=x.text(); //the text method 

           //Bdd stylle
           expect(actualName).to.equal(expectedName)//comparing the results
           //expect(actualName).to.not.equal(expectedName)

           //Tdd style
           assert.equal(actualName,expectedName)
           //assert.notequal(actualName,expectedName)

        //Bdd Assertions
        expect(true).to.be.true
        const o = { name: 'shalini' }
         expect(o).to.equal(o)
         expect(o).to.deep.equal({ name: 'shalini' })



           const person = {
            name: 'Joe',
            age: 20,
          }
          assert.isObject(person, 'value is object')
          


        })



    })

}
)