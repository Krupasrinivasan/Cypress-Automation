describe ('My Fifth Test Suite', function()
{

    it('My first test case', function()
    {
        
        // cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.visit(Cypress.env("url")+"/AutomationPractice/");
        // assert table contents
        cy.get('table[name="courses"] tbody tr td:nth-child(2)').each(($e1,index,$list)=>{

            const course = $e1.text();
            if(course.includes("Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C")){

                cy.get('table[name="courses"] tbody tr td:nth-child(2').eq(index).next().then(function(price){
                    
                    const nPrice = price.text();
                    expect(nPrice).to.equal('20');

                })


            }

        })

    } )
    

})