import sepetPage from "../pageObject/sepetPage"

Cypress.Commands.add('inputSearchBox', () => {
    sepetPage.inputSearchBox();
})

Cypress.Commands.add('clickSearchButton', () => {
    sepetPage.clickSearchButton();
})

Cypress.Commands.add('clickFirstProduct', () => {
    sepetPage.clickFirstProduct();
})

Cypress.Commands.add('selectSize', () => {
    sepetPage.selectSize();
})

Cypress.Commands.add('clickAddtoCart', () => {
    sepetPage.clickAddtoCart();
})

Cypress.Commands.add('clickGoToCart', () => {
    sepetPage.clickGoToCart();
})

Cypress.Commands.add('clickGoToCartOnTheRightCorner', () => {
    sepetPage.clickGoToCartOnTheRightCorner();
})

Cypress.Commands.add('verifyInfoText', () => {
    sepetPage.verifyInfoText();
})

Cypress.Commands.add('verifysepet', () => {
    sepetPage.verifysepet();
})

Cypress.Commands.add('verifysepet2', () => {
    sepetPage.verifysepet2();
})