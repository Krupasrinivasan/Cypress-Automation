describe ('My Third Test Suite', function()
{

    it('My first test case', function()
    {
        
        // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit(Cypress.env("url")+"/AutomationPractice/");
        //checkbox
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get("input[type='checkbox']").check(['option2','option3'])

        //static dropdown
        cy.get('select').select('option2').should('have.value','option2');
       
        //Dyanamic dropdown
        cy.get('#autocomplete').type('Ind');
        cy.get('.ui-menu-item div').each(($el,index,$list)=>{
            if($el.text()=='India'){
                $el.click();
            }
        })
        cy.get('#autocomplete').should('have.value','India');

        //visibility check
        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');

        //Radio button
        // cy.get('#radio-btn-example [value="radio2"]').check();
        cy.get('[value="radio2"]').check();
        cy.get('[value="radio2"]').should('be.checked');

    } )
    

})