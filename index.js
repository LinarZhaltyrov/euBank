require('dotenv').config()
const express = require('express')
const router = require('./router/routers')


const PORT = process.env.PORT || 8000

const app = express()

app.use(express.json())
app.use('/api1', router)

const serverStart = async () => {
    try{
        app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`))
    } catch (err) {
        console.log(err);
    }
}

serverStart()