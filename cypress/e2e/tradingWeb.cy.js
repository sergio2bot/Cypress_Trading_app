import loginPage from "../pages/loginPage"
import userDashboardPage from "../pages/userDashboardPage"
import user from "../fixtures/user.json"

describe('Trading Application GUI logIn',()=>{
    beforeEach(()=>{
        cy.visit('/');
    });

    it('User clicking Sign In button without providing username and password',()=>{
        loginPage.elements.btn_signIn().click();
        loginPage.errorTextShouldBePresent('email');
        loginPage.errorTextShouldBePresent('password');
    });

    it('User is providing wrong Email and valid password',()=>{
        loginPage.login('WRONG',user.email);
        loginPage.elements.err_msg('email').should('have.text','Please enter a valid email');
    });

    it('Valid login data is provided',()=>{
        loginPage.login(user.email,user.password);
        userDashboardPage.elements.txt_welcome().should('be.visible');
    })

})


describe('Trading Application dashboard tests',()=>{
    beforeEach('user logs in',()=>{
        cy.visit('/');
        loginPage.login(user.email,user.password);
        userDashboardPage.acceptCookies();
    })

    it('Verify all the links on the page are set',()=>{
        userDashboardPage.elements.txt_welcome().should('be.visible');
        cy.get('a').each(link=> {
            if(link.prop('href')){
                cy.request({
                    url:link.prop('href'),
                    failOnStatusCode:false
                })
                cy.log(link.prop('href'));
            }
        })
    })
})