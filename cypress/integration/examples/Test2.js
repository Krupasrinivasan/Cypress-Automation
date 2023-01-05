describe ('My Second Test Suite', function()
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

        cy.get('@productLocator').find('.product').each(($e1,index,$list)=>{

            const vegText = $e1.find('h4.product-name').text();
            if(vegText.includes('Cashews')){
                // $e1.contains('ADD TO CART').click();

                cy.wrap($e1).find('button').click();
            }

        })
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.get('button').contains('Place Order').click();

    } )

})