const User = require('../models/user')
const mailSendler = require('../helpers/mailSeandler')

class UserController {
    async login(req, res) {
        try {
            const { email, pass } = req.body
            const candidate = await User.findOne({
                where: {
                    email: email,
                    pass: pass
                }
            })

            if (candidate.pass !== pass && candidate.email !== email) {
                res.json({ message: 'Неверный Email или пароль' })
            } else {
                req.session.user = candidate
                req.session.save((err) => {
                    if (err) {
                        throw err
                    }
                    res.json({ message: 'Доступ разрешен' })
                })
            }
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }

    async registr(req, res) {
        try {
            const { email, pass, login } = req.body

            const user = await User.create({
                login: login,
                email: email,
                pass: pass
            })

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
                res.json({ message: 'Logout' })
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    }
}

module.exports = new UserController()