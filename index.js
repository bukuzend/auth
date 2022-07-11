const express = require('express')
const db = require('./db.js')
const userRouter = require('./routes.js')

const PORT = process.env.PORT || 5000;


db.connect()
const app = express()

app.use(express.json())
app.use('/',userRouter)



app.listen(PORT, (err) => {
    if(err) {
        return console.log(err)
    }

    console.log(`Server PORT: ${PORT} OK`)
})
