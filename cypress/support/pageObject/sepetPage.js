import sepetPageData from "../../fixtures/sepetPageData.json"

const searchBox = '.icon-search.issetColor'
const searchButton = 'button > span.icon-search'
const firstProduct = '.listProductItem.product-item_productListItem__t_UMA'
const size = '.select-size__control'
const addToCartButton = "div#select-size div.select-size__indicators.css-1wy0on6 > div > span"
const goToCartButton = "div.product-added-card_cardBoxRight__r4cGW > button"
const goToCartButtonOntheRightCorner = "div#header-container a > div"
const productNameBefore = "div#__next h1 > span"
const productPriceBefore = "div#__next div.product-price_checkPrice__NMY9e > strong"
const productNameAfter = "div#__next div.cart-item_cartItemProductTitle__0NsB5 > a > span"
const productPriceAfter = "div#__next div.cart-item_cartItemPrice__4Kk_q > div > div > div.product-price_checkPrice__NMY9e > strong"

let productName;
let productPrice;
class sepet {
    inputSearchBox() {
        cy.wait(5000);
        cy.get(searchBox).click();
        cy.wait(5000);
        cy.get('input[name="q"]').should('be.visible').type(sepetPageData.searchProductName);
    }
    clickSearchButton() {
        cy.get(searchButton).click();
    }
    clickFirstProduct() {
        cy.get(firstProduct).first().click();
    }
    selectSize() {
        cy.wait(5000);
        cy.get(size).first().click();
        cy.wait(5000);
        cy.get("css-1hac4vs-dummyInput").first().click();
        cy.get(productNameBefore).invoke('text').then((name) => {
            productName = name.trim();
        });
        cy.get(productPriceBefore).invoke('text').then((price) => {
            productPrice = price.trim();
        });
    }
    clickAddtoCart() {
        cy.get(addToCartButton).click();
    }
    clickGoToCart() {
        cy.get(goToCartButton).click();
    }
    clickGoToCartOnTheRightCorner() {
        cy.get(goToCartButtonOntheRightCorner).click();
    }
    verifyInfoText() {

    }
    verifysepet() {
        cy.get(productNameAfter)
            .should('contain', productName);

        cy.get(productPriceAfter)
            .should('contain', productPrice);
    }
    
}
export default new sepet();