import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import LoanCardService from '../services/LoanCardService'

const ListLoanCardDetails = () => {

const [loancards, setLoancards] = useState([])

useEffect(() => {
  
    LoanCardService.getAllLoanCards().then((response) => {
        setLoancards(response.data)
        console.log(response.data);
    }).catch(error => {
        console.log(error);
    })

}, [])


  return (
    <div className = "container">
        
        <h3 className = "text-center">Customer Master Data Details</h3>
        <Link to= "add-loandetails" className = "btn btn-primary mb-2" >Add</Link>
        <table className = "table table-bordered table-stripped">
            <thead>
                <th>Loan id</th>
                <th>Loan Type</th>
                <th>Duration</th>
                <th colSpan={2}>Actions</th>
            </thead>
            <tbody>
                {
                    loancards.map(
                        loans => 
                        <tr key = {loans.id}>
                            <td>{loans.loan_id}</td>
                            <td>{loans.loan_type}</td>
                            <td>{loans.duration}</td>
                            <td><button>Edit</button></td>
                            <td><button>Delete</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListLoanCardDetails