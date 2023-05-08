// {
//     "_id": "63064232cf92b07e37090e0a",
//     "sname": "Bombay collection",
//     "name": "Hussain Khan",
//     "phone": 9023789087,
//     "email": "K",
//     "pass": "k",
//     "costomer": [{}],
//     "__v": 0,

//     "ctype": [{}],

//     "cltpart": [{}]
// },

// Output : -

// update field [sname, name, phone, email, pass]



app.patch('/editProfil/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const updateuser = await getschema.findByIdAndUpdate(id, {
            sname: req.body.sname,
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
        }, {
            new: true
        }).then(data => {
            if (!data) {
                console.log('something went wrong');
            } else {
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

