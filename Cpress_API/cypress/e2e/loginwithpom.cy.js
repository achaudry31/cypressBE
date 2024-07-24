import Login from "/PageObjects/LoginPage.js"

describe('Using POM' , ()=>{

        it('Login Test' , ()=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/")
            const ln = new Login();
            ln.setUserName("Admin")
            ln.setPassword("admin123")
            ln.clicksubmit()
            ln.verifyLogin() 
    })
    
    
    })