import user from "../fixtures/user.json"

describe('Api tests for the trading app',()=>{

    it('Send wrong login credentials',()=>{
        const reqBody = {
            "email":"koranetsserge",
            "password":"Ch0r25$t",
            "rememberMe":true
        };
        cy.verifyResponseCode('/client-api/login',reqBody,'POST',401);
    });

    it('Send valid credentials in login request',()=>{
        const reqBody = {
            "email":user.email,
            "password":user.password,
            "rememberMe":true
        };
        cy.verifyResponseCode('/client-api/login',reqBody,'POST',200);
    })

    it('Execute put Profile request with POST method',()=>{
        cy.verifyResponseCode('https://my.amega.finance/client-api/profile',{},'POST',405)
    })

})