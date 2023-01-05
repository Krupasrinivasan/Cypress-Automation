/// <reference types="Cypress" />
describe ('My Seventh Test Suite', function()
{

    it('My first test case', function()
    {
        
        // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit(Cypress.env("url")+"/AutomationPractice/");
        //child tabs and windows
        // cy.get('opentab').then(function(el){

        //     const url = el.prop('href');
        //     //cy.visit(url); //this won't work
        // })
        

    } )
    

})