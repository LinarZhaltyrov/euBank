class UserController {
    async login(req, res) {
        try{
            const { email, pass } = req.body
            console.log(email, pass);
            res.json('login working')
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    async registr(req, res) {
        try{
           const { email, pass, name } = req.body
           console.log(email, pass, name);
           res.json('registr working')
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    async logout(req, res) {
        try{
            const { email, pass } = req.body
            console.log(email, pass);
            res.json('registr working')
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = new UserController()