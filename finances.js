var cors = require('cors')  
const con = require('./connection');
const express = require('express'); //importing the express server module
const app = express(); //creating an object of express module
app.use(cors())

console.log("Started the Application")
app.get('/api/payments', async function(req,res){
    try{
        con.query('select * from payments', (err,result)=>{
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

app.get('/api/rentals', async function(req, res){
    try{
        con.query('select * from rentals', (err,result)=>{
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


app.get('/api/maintenance', async function(req, res){
    try{
        con.query('select * from maintenance', (err,result)=>{
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


app.listen(8080);  //port number 
