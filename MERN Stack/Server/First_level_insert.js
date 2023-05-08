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

// inset field [sname, name, phone, email, pass]



app.post('/ragister', async (req, res) => {
    const { sname, name, phone, email, pass } = req.body;

    console.log(req.body.sname);
    try {
        const userexist = await getschema.findOne({ email: email })

        if (userexist) {
            return res.status(400).json({ error: ' email already exists' })
        } else {
            const user = new getschema({
                sname, name, phone, email, pass,
            })

            await user.save();
            res.json({ message: "user Ragistrate Successfully" })
        }
    } catch (error) {
        console.log(error);
    }

})