describe('Connector commands',()=>{
    it('its method',()=>{
        cy.wrap({ name: 'shalini' }).its('name').should('eq', 'shalini') // using object
        //using Array
        cy.wrap(['1','2','name']).its(1).should('eq', '2') // true



    })
    it('spread method',()=>{
        const arr = ['foo', 'bar', 'baz']

     cy.wrap(arr).spread(function(foo, bar, baz){
      expect(foo).to.eq('foo')
     expect(bar).to.eq('bar')
     expect(baz).to.eq('baz')
})

    })
})