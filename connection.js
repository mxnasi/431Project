
const mysql = require('mysql')
const con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password:'admin',
    database:'sportscar'
    });
    con.connect(err=>{  

        if(err){
            console.log("Connection Error")
        }
        else{
        console.log ('Connected to database')
        }
    })

    

    module.exports = con;