

app.get('/getuser/:id/:obid', async (req, res) => {
    try {
        const id = req.params.id
        const obid = req.params.obid
        console.log(id);
        const peruserdata = await getschema.find({ 'costomer._id': obid },
            { "_id": obid, costomer: { $elemMatch: { _id: obid } } });
        res.status(201).json(peruserdata);
    } catch (error) {
        res.send(error)
    }

})
