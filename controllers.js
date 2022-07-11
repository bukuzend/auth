const db = require('./db.js')
const jwt = require('jsonwebtoken')

class UserController {
    
    
    async getOneUser(req,res) {
    const {login, password} = req.body

    const user = await db.query(`SELECT * from person where login = '${login}'`)
    
    if(user.rowCount != 0){
        try {
            if((user.rows[0].login == login)&&
                (user.rows[0].password == password)) {

                const token = jwt.sign({
                    id: user.rows[0].id,
                    login: user.rows[0].login,
                    password: user.rows[0].password
                    }, 'secret123', {
                        expiresIn: '7d',
                    })

                res.json(token)
            }
            else {
                res.send('Bad login or password')
            }
        }
        catch (error) {
            res.send(error)
        }}

    else {
        res.send('Bad login or password')
    }
    }



}

module.exports = new UserController()