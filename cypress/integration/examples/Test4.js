describe ('My Fourth Test Suite', function()
{

    it('My first test case', function()
    {
        
        // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit(Cypress.env("url")+"/AutomationPractice/");
        
        //Alert popup
        cy.get('#alertbtn').click();
        //window alert captured by cypress
        cy.on('window:alert',(str)=>{
            
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        });

        cy.get("[value='Confirm']").click();
        cy.on('window:confirm',(str)=>{
            
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        });

        //to click cancel on alert confirm
        // cy.get("[value='Confirm']").click();
        // cy.on('window:confirm',(str)=>{
        //     return false;
        // });

        //child tabs
        cy.get('#opentab').invoke('removeAttr','target').click();

        //ge url and assert
        cy.url().should('include','https://www.rahulshettyacademy.com/');

        //browser navigation back or forward
        cy.go('back');
        //cy.go('forward);

    } )
    

})