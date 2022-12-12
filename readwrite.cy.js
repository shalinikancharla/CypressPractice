describe('readwrite file',()=>{
    it('testing write',()=>{
        cy.writeFile('sample.txt','Hello world')//write to the file
        //cy.writeFile('sample.txt','{enter}')
        cy.writeFile('sample.txt','\nThank you',{flag:'a+',append:true})
        cy.writeFile('sample.txt','Thank ',{flag:'a+',append:true})
        cy.writeFile('sample.txt','\nyou',{flag:'a+',append:true})

        cy.writeFile('sample.json',{name:'shalini',email:'12345@gmail.com'})

    })
    it('Reading file',()=>{
        cy.readFile('sample.txt').then(function(value){
            cy.log(value)
        })
        cy.readFile('sample.json').then(function(temp){
            cy.log(temp.name)
        })

    })
})