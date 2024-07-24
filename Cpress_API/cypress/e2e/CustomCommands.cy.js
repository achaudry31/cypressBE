
describe('Custom command' , ()=>{

  
    
    it('handlings links' , ()=>{
    
        cy.visit("https://demo.nopcommerce.com/")
        //using custom command
        cy.clickLinks("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')
    
    })

    it.only('Login Command' , () => {
    
        cy.visit("https://demo.nopcommerce.com/")
        //using custom command
        cy.clickLinks("Log in")     //custom command of links
        cy.Loginapp("testing@gmail.com","test123")  //custom Command of login
       // cy.get(".ico-account").should('have.text','My account')
    
    })
    
    
    })