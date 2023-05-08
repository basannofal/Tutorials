

app.get('/getuser/:id', async (req, res) => {
    try {
        const { id } = req.params
        console.log(id);
        const peruserdata = await getschema.findById(id);
        res.status(201).json(peruserdata);
    } catch (error) {
        res.send(error)
    }

})