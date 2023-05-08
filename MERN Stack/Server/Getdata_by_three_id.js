app.get('/getuser/:id/:obid/:orid', async (req, res) => {
    try {
        const id = req.params.id
        const obid = req.params.obid
        const orid = req.params.orid
        console.log(id);
        const peruserdata = await getschema.find({ 'costomer.corder': orid },
            { "_id": orid, "costomer.$.corder": { $elemMatch: { "_id": orid } } });
        res.status(201).json(peruserdata);
    } catch (error) {
        console.log(error);
        res.send(error)
    }

})
