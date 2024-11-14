/// <reference types="cypress" />


describe('Alisveris Sepetine Urun Ekleme', () => {

    beforeEach(() => {
        cy.navigatePage();
    });

    it.only('Kullanıcı seçtiği ürünü başarılı bir şekilde sepete ekler', { tags: ['@Smoke'] }, () => {
        cy.inputSearchBox();//Search Box içine "beyaz gömlek" yazar
        cy.clickSearchButton();//Ara butonuna tıklar
        cy.clickFirstProduct();//Ürün listesindeki ilk ürüne tıklar
        cy.selectSize();//Beden listesinden seçim yapar
        cy.clickAddtoCart();//Sepete ekle butonuna tıklar
        cy.clickGoToCart();//Sepete Git butonuna tıklar
        cy.verifysepet();//Ürünün başarılı bir şekilde sepete eklendiğini doğrular          
    });

    it('Kullanıcı seçtiği ürünün bedenini seçmeden sepete ekleyemez.', { tags: ['@Smoke'] }, () => {

        cy.inputSearchBox();//Search Box içine "beyaz gömlek" yazar
        cy.clickSearchButton();//Ara butonuna tıklar
        cy.clickFirstProduct();//Ürün listesindeki ilk ürüne tıklar
        cy.clickAddtoCart();//Sepete ekle butonuna tıklar
        cy.clickGoToCartOnTheRightCorner();//Sağ üst köşeden Sepet butonuna tıklar
        cy.verifysepet2();//Ürünün sepete eklenmediğini doğrular.      

    });

    it('Kullanıcı seçtiği ürünü sepete ekleyemediğinde doğru bilgilendirme mesaji görüntüler.', { tags: ['@Smoke'] }, () => {

        cy.inputSearchBox();//Search Box içine "beyaz gömlek" yazar
        cy.clickSearchButton();//Ara butonuna tıklar
        cy.clickFirstProduct();//Ürün listesindeki ilk ürüne tıklar
        cy.clickAddtoCart();//Sepete ekle butonuna tıklar
        cy.verifyInfoText();//"Beden Seçimi Yapınız Lütfen!" information popup görüntülenir    
    });

});