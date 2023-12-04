var cors = require('cors')  
const con = require('./connection');
const express = require('express'); //importing the express server module
const app = express(); //creating an object of express module
app.use(cors())

console.log("Started the Application")
app.get('/api/cars', async function(req,res){
    try{
        con.query('select * from cars', (err,result)=>{
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

app.get('/api/location', async function(req, res){
    try{
        con.query('select * from location', (err,result)=>{
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

app.listen(4200);  //port number 
