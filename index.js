require('dotenv').config()
const express = require('express')
const session = require('express-session')
const router = require('./router/routers')
const db = require('./database/db')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

const PORT = process.env.PORT || 8000

const app = express()

const sessionStore = new SequelizeStore({
    db: db,
    tableName: 'session',
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'very secret key',
    resave: false,
    saveUninitialized: false,
    store: sessionStore
}))

sessionStore.sync()


app.use('/api1', router)

const serverStart = async () => {
    try {
        await db.authenticate()
            .then(() => console.log('база данных подключена'))
            .catch((err) => console.log('ошибка при подключении к базе данных'))

            await db.sync()
        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}

serverStart()