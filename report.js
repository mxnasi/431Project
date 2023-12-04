var cors = require('cors')  
const con = require('./connection');
const express = require('express'); //importing the express server module
const app = express(); //creating an object of express module
app.use(cors())

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

app.get('/api/report', async function(req, res){

    const query1 = "SELECT C.CarID, C.Make, C.Model, C.Color, Cu.CustomerID, Cu.Cname, Cu.Email, Cu.CPhone_number," +
    " R.rentalID, R.Date AS RentalDate, R.Rental_fees," +
    " P.ReceiptID, P.Total_Cost, P.Payment_method," +
    " S.staffID, S.Sname, S.Semail" +
    " FROM Rentals R JOIN Cars C ON R.carID = C.CarID" +
    " JOIN Customer Cu ON R.customerID = Cu.CustomerID JOIN Payments P ON R.carID = P.carID AND R.customerID = P.customerID" +
    " JOIN Staff S ON C.CarID = S.staffID WHERE R.Date >= '2023-12-06' AND R.Date <= '2023-12-08';"

    try{
        console.log('Query: ' + query1)

        con.query(query1, (err,result)=>{
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

app.listen(8081)