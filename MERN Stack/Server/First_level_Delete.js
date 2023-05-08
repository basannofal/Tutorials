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

// Delete field [one document all]

app.delete('/api/user/:id', (req,res) => {
    
    
    const id = req.params.id;
    console.log(id);
    getschema.findByIdAndDelete(id)
    .then(data => {
        if (!data) {
            res.send("please enter valid id")
        } else {
            res.send(data)
        }
    }).catch(err => {
        res.send(err);
    })

})









