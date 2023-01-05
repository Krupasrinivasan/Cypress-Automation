/// <reference types="Cypress" />
describe ('My Sixth Test Suite', function()
{

    it('My first test case', function()
    {
        
        // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit(Cypress.env("url")+"/AutomationPractice/");
        //Mouse hover

        // cy.get('.mouse-hover-content').invoke('show');
        cy.contains('Top').click({force:true}); //check internally by DOM HTML
        cy.url().should('include','top');

    } )
    

})