class ProductPage
{

    getCheckOutButton()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
    getCheckoutSubmitButton()
    {
        return cy.get("button[class='btn btn-success']");
    }
    getProductPrice()
    {
        return cy.get("tbody tr td:nth-child(4) > strong");
    }
    getTotal()
    {
        return cy.get("tbody tr td.text-right:nth-child(5)");
    }
    
}
export default ProductPage;