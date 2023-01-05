class PurchasePage
{
    getCountry()
    {
        return cy.get("#country");
    }
    getSuggestions()
    {
        cy.wait(2000);
        return cy.get("div[class='suggestions'] ul li a");
    }
    getTermsAndConditionsRadioButton()
    {
        return cy.get("label[for='checkbox2']");
    }
    getPruchaseSubmitButton()
    {
        return cy.get('input[class="btn btn-success btn-lg"]');
    }
    getSuccessMessage()
    {
        return cy.get("div[class='alert alert-success alert-dismissible']");
    }

}
export default PurchasePage;