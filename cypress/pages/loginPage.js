const ERROR_MSG = 'input[name="{fld}"]+p';

class LoginPage{

   elements = {
        fld_username:()=> cy.get('[name="email"]'),
        fld_password:()=> cy.get('[name="password"]'),
        btn_signIn:()=>cy.get('[data-testid="test-submit"]'),
        err_msg:(fld)=>cy.get(ERROR_MSG.replace('{fld}',fld))
    }

    login(username,password){
       this.elements.fld_username().type(username,{force:true});
       this.elements.fld_password().type(password);
       this.elements.btn_signIn().click();
    }
    
    errorTextShouldBePresent(fld){
        cy.get(ERROR_MSG.replace('{fld}',fld)).should('have.text','This field is mandatory');
    }

}

module.exports = new LoginPage();