const nodemailer = require('nodemailer')

const mailSendler = async (email, login) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'example@gmail.com',
            pass: 'password'
        }
    })

    let info = await transporter.sendMail({
        from: 'example@gmail.com',
        to: `${email}`,
        subject: `Поздравляем! Вы успешно зарегестрировались`,
        text: '',
        html:
            `
            <div>
                <h1>Клиент ${login} благодарим за то что выбрали именно нас</h1>
                
            </div>
            `
    })
}

module.exports = mailSendler