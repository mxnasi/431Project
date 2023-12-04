const RentalInformation = ({rentalData}) => {
    return (
        <>
        {
            rentalData.map((currRentalData) => {    //loops through records
                const {Make, Model, Color, 
                    CustomerID, Cname, Email, 
                    CPhone_number, rentalID, RentalDate,
                    Rental_fees, ReceiptID, Total_Cost, 
                    Payment_method, staffID, Sname, Semail} = currRentalData;

                    return(
                        <tr key={ReceiptID}>
                            <td>{Make}</td>
                            <td>{Model}</td>
                            <td>{Color}</td>
                            <td>{CustomerID}</td>
                            <td>{Cname}</td>
                            <td>{Email}</td>
                            <td>{CPhone_number}</td>
                            <td>{rentalID}</td>
                            <td>{RentalDate}</td>
                            <td>{Rental_fees}</td>
                            <td>{ReceiptID}</td>
                            <td>{Total_Cost}</td>
                            <td>{Payment_method}</td>
                            <td>{staffID}</td>
                            <td>{Sname}</td>
                            <td>{Semail}</td>

                        </tr>
                    )
            })
        }
        </>

    )
}
export default RentalInformation;