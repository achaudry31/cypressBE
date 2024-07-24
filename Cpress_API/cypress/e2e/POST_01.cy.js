//const datajson = require('../fixtures/createUser.json')

describe('Create user test' , ()=>{
    
    let accessToken = '7d408be8dea15e3f7eb4b17ff888f7cce596dc7028c44a7d0f8579fa80802bcd'
    let randomText = ""
    let testemail = ""

    it('Post users test' , ()=>{

        var pattren = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i=0; i<10; i++)
        randomText+=pattren.charAt(Math.floor(Math.random() * pattren.length));
        testemail = randomText + '@gmail.com'
    
        cy.request({
        method : 'POST',
        url : 'https://gorest.co.in/public/v1/posts',
        header : {
            'Authorization' : "Bearer " + accessToken    
    },
    body: {
            "name": datajson.name,
            "gender":datajson.gender,
            "email":testemail,
            "status":datajson.status
    }

    }).then((res)=>{
        expect(res.status).to.eq(201)
        expect(res.body.data).has.property('name',testemail)
        expect(res.body.data).has.property('gender',datajson.gender)
        expect(res.body.data).has.property('email',datajson.email)
        expect(res.body.data).has.property('status',datajson.status)
    })
    
    })
    
    
    })