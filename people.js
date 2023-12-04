var cors = require('cors')  
const con = require('./connection');
const express = require('express'); //importing the express server module
const app = express(); //creating an object of express module
app.use(cors())

console.log("Started the Application")
app.get('/api/Users', async function(req,res){
    try{
        con.query('select * from users', (err,result)=>{
            if(err){
                res.send("Error retrieving data from the Database");
            }else{
                res.send(result);
                }
            })
    
        }
    catch(e){
        console.error(e)
        return res.status(500).send({
            success: false,
            message: 'internal server error'
        })
    }
});

app.get('/api/staff', async function(req, res){
    try{
        con.query('select * from staff', (err,result)=>{
            if(err){
                res.send("Error retrieving data from the Database");
            }else{
                res.send(result);
                }
            })
    
        }
    catch(e){
        console.error(e)
        return res.status(500).send({
            success: false,
            message: 'internal server error'
        })
    }

});


app.get('/api/customer', async function(req, res){
    try{
        con.query('select * from customer', (err,result)=>{
            if(err){
                res.send("Error retrieving data from the Database");
            }else{
                res.send(result);
                }
            })
    
        }
    catch(e){
        console.error(e)
        return res.status(500).send({
            success: false,
            message: 'internal server error'
        })
    }

});


app.listen(5000);  //port number 
