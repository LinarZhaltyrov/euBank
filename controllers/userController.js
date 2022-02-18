const User = require('../models/user')
const mailSendler = require('../helpers/mailSeandler')

class UserController {
    async login(req, res) {
        try {
            const { email, pass } = req.body
                
            res.json({ message: 'Доступ разрешен' })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    async registr(req, res) {
        try {
            const { email, pass, login } = req.body
            const user = User.create({
                login: login,
                email: email,
                pass: pass
            })

                (await user).save()

            await mailSendler(email, login)

            res.json({ message: 'Успешная регистрация' })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    async logout(req, res) {
        try {
            req.session.destroy(() => {
                res.json('Logout')
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = new UserController()