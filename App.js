import "./App.css";
import React, { useState, useEffect } from "react";
import RentalInformation from "./RentalInformation";
import ViewCars from "./ViewCars";



function App() {
  
  const url = "http://localhost:8081/api/report";
  const carInfourl = "http://localhost:8081/api/cars";



  const [data, setData] = useState([]);
  const[showRentalInfo, setShowRentalInfo] = useState(false);
  const[showCarInfo, setShowCarInfo] = useState(false);
  const[carData, setCarData] = useState([]);

  const fetchInfo = async() => {
    return await fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d))
  }
  useEffect(() => {
    fetchInfo();
  }, []);

  //when page loads first time, populates car info and
  // stores in variable in carData (line 16)
  const fetchCarInfo = async() => {
    return await fetch(carInfourl)
      .then((res) => res.json())
      .then((d) => setCarData(d))
  }
  useEffect(() => {
    fetchCarInfo();
  }, []);

return (<> 
   <div className="navbar">
    <a onClick = {() => {setShowRentalInfo(false); setShowCarInfo(true)}}> View Cars</a>
    <a onClick = {() => {setShowRentalInfo(true); setShowCarInfo(false)}}>Rental Information</a>
      
    </div>
    

    {showCarInfo ? 
      <table>
      <thead>
      <th>Car ID</th>
      <th>Make</th>
      <th>Model</th>
      <th>Color</th>
      <th>Year </th>
      <th>Mileage </th>
      <th>Location ID </th>
      <th>Availability</th>
      
    </thead>
    <tbody>
      <ViewCars selectedCarData = {carData} />
    </tbody>

      </table>
       :null } 



    {showRentalInfo ? 
      <table>
      <thead>
      <th>Make</th>
      <th>Model</th>
      <th>Color</th>
      <th>Customer ID </th>
      <th>Customer Name </th>
      <th>Customer Email</th>
      <th>Customer Phone Number</th>
      <th>Rental ID</th>
      <th>Date of Rental</th>
      <th>Rental Fees</th>
      <th>Receipt ID </th>
      <th>Total Cost </th>
      <th>Payment Method </th>
      <th>Staff ID </th>
      <th>Staff Name</th>
      <th>Staff Email</th>
    </thead>
    <tbody>
      <RentalInformation rentalData = {data} />
    </tbody>

      </table>
       :null }    
  </> 
  );
}

export default App;