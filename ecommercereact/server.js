const express = require('express')
const cors = require('cors')
const mysql = require('mysql')
const app = express()


app.use(cors());
app.use(express.json())
var db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'Ecommerce'
});

app.get('/Products', (req, res) =>{
    
    db.query('SELECT * FROM Products', (err, result) => {
        if (err){
            console.log(err)
        } else {
            res.send(result)
            console.log(result)
        }
    })


})
app.get('/Products', (req, res) => {
    db.query("SELECT * FROM Products", (err, result) => {
        if (err){
            console.log(err)
        } else{
            res.send(result)
        }
    })
})
module.exports
app.listen(3001, () =>{
    console.log('Connected to port 3001')
})