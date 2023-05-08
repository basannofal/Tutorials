//***************************** LOGIN ***********************************8 */

app.post('/login', async (req, res) => {
    try {
        const { email, pass } = req.body;
        console.log("reached");
        const userava = await getschema.findOne({ email: email });

        if (userava) {
            if (userava.pass === pass) {
                res.json(userava)
            }
            else {

                res.status(400).json("invalid");
            }
        }
        else {
            res.status(400).json("invalid email")
        }
    } catch (error) {
        console.log(error);
    }
})