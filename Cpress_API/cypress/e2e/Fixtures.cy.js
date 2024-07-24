describe('MY Fixture' , ()=>{
    
    it.only('fixtureDemo' , ()=>{
    
     cy.visit("https://opensource-demo.orangehrmlive.com/")
     cy.fixture('orangehrm').then( (data)=>{

        cy.get("input[placeholder='Username']").type(data.username)
        cy.get("input[placeholder='Password']").type(data.password)
        cy.get("button[type='submit']").click()

        cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
        .should('have.text',data.expected)
     })

   
     })
         // Access through HOOK For multiple IT blocks

     before( () =>{

        let userdata;

        cy.fixture("orangehrm").then( (data)=>{
            userdata = data
        })
     })

     it('fixtureDemo_one' , ()=>{
    
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.fixture('orangehrm').then( (data)=>{
   
           cy.get("input[placeholder='Username']").type(data.username)
           cy.get("input[placeholder='Password']").type(data.password)
           cy.get("button[type='submit']").click()
   
           cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
           .should('have.text',data.expected)
        })
   
      
       
       })
    
    })