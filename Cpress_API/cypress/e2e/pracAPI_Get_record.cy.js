
describe('get API from Postman' , ()=>{
    
    it('get users test' , ()=>{
    cy.request({
        method : 'GET',
        url : 'https://reqres.in/api/users?page=2', //link from postman 
     

    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body.data[0]).has.property('first_name','Michael')
    })
    
    })
     
    })