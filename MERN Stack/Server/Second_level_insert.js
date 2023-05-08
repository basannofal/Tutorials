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

// inset field in Customer Array [cname, cphone, ccity, caddress, cemail, gender]




app.patch('/Newcustomer/:id', async (req, res) => {
    const { cname, cphone, ccity, caddress, cemail, gender } = req.body;


    const _id = req.params.id;

    getschema.findByIdAndUpdate(_id, {
        $push: {
            costomer:
            {
                cname: req.body.cname,
                cphone: req.body.cphone,
                optcphone : req.body.optcphone,
                ccity: req.body.ccity,
                caddress: req.body.caddress,
                cemail: req.body.cemail,
                gender: req.body.checked
            },
        }
    })
        .then(data => {
            res.status(201).json(data);
        }).catch(err => {
            console.log(err);
        })
})
