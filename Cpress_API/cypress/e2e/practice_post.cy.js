describe('Create user test' , ()=>{

  //  let randomText = ""
   // let testemail = ""

    it('Post users test' , ()=>{

        cy.fixture('createUser').then( (data)=>{

     //   var pattren = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      //  for (var i=0; i<10; i++)
      //  randomText+=pattren.charAt(Math.floor(Math.random() * pattren.length));
      //  testemail = randomText + '@gmail.com'
    
        cy.request({
        method : 'POST',
        url : 'https://reqres.in/api/users', // postman link DemorestAPI
      
    body: {
            "name": data.name,
            "gender":data.gender,
            "email":data.email,
            "status":data.status
    }

    }).then((res)=>{
        expect(res.status).to.eq(201)
        expect(res.body).has.property('name',data.name)
        expect(res.body).has.property('gender',data.gender)
        expect(res.body).has.property('email',data.email)
        expect(res.body).has.property('status',data.status)
    })
    
    })
    
})
    })