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

// 'DELETE' field in Customer Array [one Costomer docs]





app.patch('/customerdelete/:id/:cid', async (req, res) => {

    const cid = req.params.cid;
    const id = req.params.id
    const id_in_string = cid.toString();

    getschema.findOneAndUpdate({ _id: id, "costomer._id": cid }, {

        $pull: {
            "costomer": {

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
