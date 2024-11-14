import homePage from "../pageObject/homePage"


 // Anasayfaya erisim
Cypress.Commands.add('navigatePage',() => {
    cy.on('uncaught:exception', (err, runnable) => { return false })  
     homePage.navigate()
})

