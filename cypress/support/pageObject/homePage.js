import homePageData from "../../fixtures/homePageData.json"

class Homepage{
    
    navigate(){ 
        cy.visit('https://www.boyner.com.tr/');
    }

}
export default new Homepage()