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

// 'Insert' field in Customer Array in Corder Array [clothType, clmesurement, specialNote, prize, deliveryDate, deliveryMonth, deliveryYear, orderUrgent, date]




app.patch('/Addorder/:id/:obid', async (req, res) => {


    const _id = req.params.id;
    const obid = req.params.obid
    var date_ob = new Date();
    var day = ("0" + date_ob.getDate()).slice(-2);
    var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    var year = date_ob.getFullYear();

    var date = day + "/" + month + "/" + year;


    getschema.findOneAndUpdate({ "_id": _id, "costomer._id": obid }, {
        $push: {
            "costomer.$.corder":
            {

                clothType: req.body.Ordertype,
                clmesurement: req.body.Measurment,
                specialNote: req.body.specialNote,
                prize: req.body.prize,
                deliveryDate: req.body.ddate,
                deliveryMonth: req.body.dmonth,
                deliveryYear: req.body.dyear,
                orderUrgent: req.body.checked,
                date: date,
                status: true,
                isselected: false,
                dvalue : req.body.dvalue,
                mid : req.body.mtid
            },
        }
    })
        .then(data => {
            res.status(201).json(data);
        }).catch(err => {
            console.log(err);
        })
})

