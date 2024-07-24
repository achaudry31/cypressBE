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
// Custom command for clicking on the links using label
Cypress.Commands.add('clickLinks',(label)=>{
    cy.get('a').contains(label).click()
})

//Over Write contains
/*Cypress.Commands.overwrite('contains',(orignalFn, subject, filter, text, options ={})=>{
    if (typeof text === 'object'){
        options = text
        text = filter
        filter = undefined
    }   
    options.matchCase = false
    return orignalFn(subject, filter, text, options)

})    */

// Custom command for login
Cypress.Commands.add("Loginapp",(email,password)=>{
    cy.get("#Email").type(email)
    cy.get("#Password").type(password)
    cy.get("button[class='button-1 login-button']").click()
    cy.get(".message-error.validation-summary-errors")
})