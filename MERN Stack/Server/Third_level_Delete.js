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

// 'Delete' field in Customer Array in Corder Array [maindoc>>customer>>[order] doc delete]




app.patch('/orderdelete/:id/:oid', async (req, res) => {

    const oid = req.params.oid;
    const id = req.params.id
    const id_in_string = oid.toString();

    getschema.findOneAndUpdate({ _id: id, "costomer.corder._id": oid }, {

        $pull: {
            "costomer.$.corder": {

                '_id': id_in_string
            }
        }
    }, { new: true })
        .then(data => {
            if (!data) {
                console.log('something went wrong');
            } else {
                res.status(201).json(data)
                console.log("delete success");
            }
        }).catch(err => {
            console.log(err);
        })
})

