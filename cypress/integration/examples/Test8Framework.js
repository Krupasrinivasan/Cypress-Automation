/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
import PurchasePage from "../pageObjects/PurchasePage";
describe ('My Eighth Test Suite', function()
{
    before(function(){

        cy.fixture('example').then(function(data){
            this.data=data;

        })
    })

    it('My first test case', function()
    {
        const homePage = new HomePage();
        const productPage = new ProductPage();
        const purchasePage = new PurchasePage();
        cy.visit(Cypress.env("url")+"/angularpractice/");

        homePage.getName().type(this.data.name);
        homePage.getGender().select(this.data.gender);
        homePage.getName().should('have.attr','minlength','2');
        homePage.getTwoWayDataBinding().should('have.value',this.data.name);
        homePage.getRadioButton().should('not.be.enabled');
        //cy.pause();
        homePage.getShopButton().click();

        //selecting product by using custom command we created in support command.js
        cy.selectProduct("Samsung Note 8");
        //multiple parameters from fixtures json file
        this.data.productName.forEach(element => {
            cy.selectProduct(element);
        });

        var sum = 0;
        productPage.getCheckOutButton().click();
        productPage.getProductPrice().each(($el,index,$list)=>{
            const text = $el.text();
            var price = text.split(" ");
            price[1] = price[1].trim();
            let priceInt = Number(price[1]);
            sum = sum+priceInt
            //cy.log(sum);

        })

        var total = 0;
        productPage.getTotal().then(function(element){
            const totalText = element.text();
            //cy.log(totalText);
            var totalPrice = totalText.split(" ");
            totalPrice[1]=totalPrice[1].trim();
            total = Number(totalPrice[1]);
            cy.log(total);
            expect(sum).to.be.equal(total);
        })
        productPage.getCheckoutSubmitButton().click();
        purchasePage.getCountry().type("in");
        
        purchasePage.getSuggestions().each(($e1,index,$list)=>{
            const countryName= $e1.text();
            //cy.log(countryName);
            // cy.wait(2000);
            if(countryName.includes(this.data.country))
            {
                cy.wrap($e1).click();
            }

        })
        purchasePage.getTermsAndConditionsRadioButton().click();
        purchasePage.getPruchaseSubmitButton().click();
        //purchasePage.getSuccessMessage().should('have.text',this.data.successMessage);
        purchasePage.getSuccessMessage().then(function(element)
        {
            const succesText = element.text();
            expect(succesText.includes("Success")).to.be.true;
        })
    } )
    

})