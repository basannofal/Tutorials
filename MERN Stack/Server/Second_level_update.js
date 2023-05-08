// {
//     "_id": "63064232cf92b07e37090e0a",
//     "sname": "Bombay collection",
//     "name": "Hussain Khan",
//     "phone": 9023789087,
//     "email": "K",
//     "pass": "k",
//     "costomer": [
//     {
//         "cname": "Nofal",
//         "cphone": 9427628497,
//         "ccity": "385001",
//         "caddress": "Palanpur ",
//         "cemail": "basannofal4@gmail.com",
//         "gender": "male",
//         "_id": "6381f0c922a77693f6b35b12",
//         "corder": [{}],
//         "cmeasure": [{}],
//         "cmeasure1": [],
//         "optcphone": 552
//     }],
//     "__v": 0,

//     "ctype": [{}],

//     "cltpart": [{}]
// },

// Output : -

// 'Update' field in Customer Array [cname, cphone, ccity, caddress, cemail, gender]



app.patch('/editProfil/:id/:obid', async (req, res) => {
    try {





        const id = req.params.id
        const obid = req.params.obid
        console.log(obid);
        const updateuser = await getschema.updateOne(
            {
              
            
                        "costomer._id":obid
                
            },
            { "$set": { 
                "costomer.$[outer].cname": req.body.cname,
                "costomer.$[outer].cphone": req.body.cphone,
                "costomer.$[outer].optcphone": req.body.optcphone,
                "costomer.$[outer].ccity": req.body.ccity,
                "costomer.$[outer].caddress": req.body.caddress,
                "costomer.$[outer].cemail": req.body.cemail,

                } 
            },
            { "arrayFilters": [
                { "outer._id": obid }
                ] 
            },).then(data => {
                if (!data) {
                    console.log('something went wrong');
                } else {
                    console.log(data);
                    res.status(201).json(data)
                    console.log("Profile Update success");
                }
            }).catch(err => {
                console.log(err);
            })
    } catch (error) {
        res.send(error)
    }

})
