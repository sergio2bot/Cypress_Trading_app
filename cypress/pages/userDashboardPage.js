

class UserDashboardPage{

    elements = {
        txt_welcome:()=>cy.get('h3'),
        wallet_balance:()=>cy.get('svg+span span'),
        accept_cookies:()=>cy.get('button#onetrust-accept-btn-handler')
    }

    acceptCookies(){
        this.elements.accept_cookies().click();
    }
}

module.exports = new UserDashboardPage();