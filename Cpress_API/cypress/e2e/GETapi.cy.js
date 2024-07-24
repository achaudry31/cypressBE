
describe('get API user test' , ()=>{

    let accessToken = '7d408be8dea15e3f7eb4b17ff888f7cce596dc7028c44a7d0f8579fa80802bcd'
    
    it('get users test' , ()=>{
    cy.request({
        method : 'GET',
        url : 'https://gorest.co.in/public/v2/users',
        header : {
            'authorization' : "Bearer " + accessToken    
    }
    }).then((res)=>{
        expect(res.status).to.eq(200)
        expect(res.body).has.property('name','Sarada Varman')
    })
    
    })
    
    
    })