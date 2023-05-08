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
//         "corder": [
//          {
//              "clothType": "Shirt",
//              "specialNote": "Hu",
//              "prize": 280,
//              "deliveryDate": "22",
//              "deliveryMonth": "12",
//              "deliveryYear": "2022",
//              "orderUrgent": "Yes",
//              "date": "06/12/2022",
//              "status": "true",
//              "clmesurement": "Fig",
//              "isselected": "false",
//              "mid": "638eba844cd84e7c8907bc68",
//              "_id": "638eba884cd84e7c8907bc6c"
//          }
//          ],
//         "cmeasure": [{}],
//         "cmeasure1": [],
//         "optcphone": 552
//     }],
//     "__v": 0,

//     "ctype": [{}],

//     "cltpart": [{}]
// },

// Output : -

// 'Update' field in Customer Array in Corder Array [clothType, clmesurement, specialNote, prize, deliveryDate, deliveryMonth, deliveryYear, orderUrgent, date]



app.patch('/editorder/:id/:obid/:orid', async (req, res) => {
    try {

        const id = req.params.id
        const obid = req.params.obid
        const orid = req.params.orid
        console.log(id);
        console.log(obid);
        console.log(orid);

        
        const updateuser = await getschema.updateOne(
        {
            "_id":id,
            "costomer": {
                $elemMatch : {
                    obid, "corder._id":orid
                }
            },
        },
        { "$set": { 
            "costomer.$[outer].corder.$[inner].specialNote": req.body.specialNote,
            "costomer.$[outer].corder.$[inner].prize": req.body.prize,
            "costomer.$[outer].corder.$[inner].deliveryDate": req.body.ddate,
            "costomer.$[outer].corder.$[inner].deliveryMonth": req.body.dmonth,
            "costomer.$[outer].corder.$[inner].deliveryYear": req.body.dyear,
            "costomer.$[outer].corder.$[inner].orderUrgent": req.body.checked,
            
            } 
        },
        { "arrayFilters": [
            { "outer._id": obid },
            { "inner._id": orid }
            ] 
        },
        ).then(data => {
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


