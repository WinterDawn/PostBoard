/*
    back end server
    resolve request
    connect to database
*/
const express = require('express');
const cors = require('cors');
const mysql = require( 'mysql');
var bodyParser = require("body-parser")


const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
process.env.SECRET_KEY = 'secret'

const getquery = 'select * from questionlist';

const connection = mysql.createConnection({
    host: 'den1.mysql6.gear.host',
    user: 'db4448',
    password: 'password.',
    database: 'DB4448',
    multipleStatements: true
});

connection.connect(err =>{
    if (err) {
        return "err";
    }
});

app.post('/user/register', (req, res) => {
    
    const today = new Date()
    const userData = {
        firstname: req.body.first_name,
        lastname: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        created: today
    }

    const registerquery = `INSERT INTO users (username, lastname, firstname, password) value("${userData.email}","${userData.lastname}","${userData.firstname}","${userData.password}")`;
    connection.query(registerquery, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            return res.send('register successfully')
        }        
    });
});

app.post('/user/login', (req, res) => {

    const userData = {
        email: req.body.email,
        password: req.body.password,
    }

    const loginquery = `SELECT * FROM users WHERE username="${userData.email}"`;
    connection.query(loginquery, (err, results) => {
        if (err) {
            return res.send(err)
        } else {
            console.log(results[0])
            if(!results[0]){
                console.log("user not existed")
                return res.send(err)
            } else {
                if(userData.password == results[0].password){
                    console.log("login successfully")
                    let token = JSON.stringify(results[0])
                    console.log(token)
                    return res.send(token)
                } else {
                    console.log("password incorrect")
                    return res.send(err)
                }
            }
            
        }        
    });
});

app.get('/user/ask',(req, res) => {
    console.log(req.query)
    const{question,name} = req.query;
    const askquery = `INSERT INTO questionlist (content, username) value("${question}", "${name}")`;
    connection.query(askquery, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send('successful ask')
        }
    });
});


app.get('/user/answer',(req, res) => {
    
    const{answer,id} = req.query;
    console.log(answer)
    const answerquery = `UPDATE questionlist SET answers = '${answer}' WHERE id = '${id}'`;
    connection.query(answerquery, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.send('successful answer')
        }
    });
});

app.get('/user',(req, res) => {
    connection.query(getquery, (err, results) => {
        if (err) {
            return res.send(err)
        }
        else {
            return res.json({
                data: results
            })
        }
    });
});

app.listen(4000,() =>{
    console.log('port 4000 listening')
});