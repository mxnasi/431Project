import React from "react";

const ViewCars = ({selectedCarData}) => {

    return (
        <>
            {(selectedCarData).map((currCars) => {    //loops through records
                const {CarID, Make, Model, Color, MYear, Mileage, locationID, Availability_Status} = currCars;

                    return(
                        <tr key={CarID}>
                            <td>{CarID}</td>
                            <td>{Make}</td>
                            <td>{Model}</td>
                            <td>{Color}</td>
                            <td>{MYear}</td>
                            <td>{Mileage}</td>
                            <td>{locationID}</td>
                            <td>{Availability_Status}</td>
                            
                        </tr>
                    )
            })
        }
        </>

    )
}
export default ViewCars;