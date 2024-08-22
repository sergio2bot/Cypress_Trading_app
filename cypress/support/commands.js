// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import {siteMap} from "./siteMap.json"

Cypress.Commands.add('login',(username,password)=> {
    cy.get(siteMap)
})


Cypress.Commands.add('verifyResponseCode',(url,reqBody,method,statusCode)=>{
    cy.request({
        method:method,
        url:url,
        failOnStatusCode:false,
        header:{
            "host":'client.amega.finance',
            "Sec-Fetch-Site":'same-origin',
            "Sec-Fetch-Mode":'cors',
            "Sec-Fetch-Dest":'empty'
        },
        body:reqBody
    }).then(response => {
        expect(response.status).to.eq(statusCode)
    })
})