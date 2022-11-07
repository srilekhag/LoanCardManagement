import React, {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom';
import NumberPicker from 'react-widgets/NumberPicker'
import LoanCardService from '../services/LoanCardService'

const AddLoanCardComponent = () => {

    const [loan_id, setLoanId] = useState('')
   const [loan_type, setLoanType] = useState('')
    const [duration, setduration] = useState(0)

    const navigate = useNavigate();

    const saveLoanDetails = (e) => {
        e.preventDefault();
        const loan_details = {loan_id, loan_type, duration};
        
        LoanCardService.createLoanCards(loan_details).then((response) => {
            console.log(response.data)
            navigate.push('/loancards')
        }).catch(error => {
            console.log(error)
        })
    }

  return (    
  <div> 
    <br /> <br />
        <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2 className='text-center'>Loan Card Master data Details</h2>
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className='form-label'>Loan id: </label>
                                    <input 
                                        type= "text"
                                        placeholder = "Loan ID" 
                                        name = "loan_id" 
                                        className = "form-control"
                                        value = {loan_id}
                                        onChange = {(e) => setLoanId(e.target.value)}
                                    />
                                    </div>
                                    <div className = "form-group mb-2">
                                    <label className='form-label'>Loan Type: </label>
                                    <select value = {loan_type} onChange = {(choice) => setLoanType(choice.target.value)}>
                                            <option value = "Furniture">Furniture</option>
                                            <option value = "Home">Home</option>
                                            <option value ="Car">Car</option>
                                            <option value = "Gold">Gold</option>
                                    </select>
                                    </div>
                                    <div className = "form-group mb-2">
                                    <label className='form-label'>Duration: </label>
                                    <NumberPicker
                                        value={duration}
                                        onChange = {(value) => setduration(value)}
                                    />
                                </div>

                                <div className = "form-group mb-2">
                                    <button className = 'btn btn-success' onClick = {(e) => saveLoanDetails(e)}>Add Data</button>
                                </div>

                                <div className = "form-group mb-2">
                                    <Link to = "/" className = 'btn btn-secondary'>SHOW DATA</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
        </div>
  </div>
  )
}

export default AddLoanCardComponent