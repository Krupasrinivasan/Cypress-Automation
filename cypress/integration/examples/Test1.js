describe ('My First Test Suite', function()
{

    it('My first test case', function()
    {
        
        // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.visit(Cypress.env("url")+"/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        // cy.get('.product').should('have.length',5);
        // cy.get('.product:visible').should('have.length',4);
        //parent child chaining

        cy.get('.products').as('productLocator');
        cy.get('@productLocator').find('.product').should('have.length',4);

        cy.get('@productLocator').find('.product').eq(1).contains('ADD TO CART').click();

        cy.get('@productLocator').find('.product').each(($e1,index,$list)=>{

            const vegText = $e1.find('h4.product-name').text();
            if(vegText.includes('Cashews')){
                // $e1.contains('ADD TO CART').click();

                cy.wrap($e1).find('button').click();
            }

        })
        cy.get('.brand').then(function(logoText){

            cy.log(logoText.text());
        })
        // cy.get('.brand').text() X     text is not a method of cypress

        //Assert the logo text GREEKART

        cy.get('.brand').should('have.text','GREENKART');

        cy.get('.cart-info table tbody tr td strong').each(($i1,index,$list)=>{
            const nItem = $i1.text();
            
        if(index==0)
        {
            expect(nItem).to.equal('2');
        }
        
        })

    } )

})