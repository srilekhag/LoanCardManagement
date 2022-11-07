import axios from 'axios'

const LOANCARD_BASE_REST_API_URL = 'http://localhost:8060/api/v1/loancards';

class LoanCardService{

    getAllLoanCards(){
        return axios.get(LOANCARD_BASE_REST_API_URL)
    }

    createLoanCards(loan_card){
        return axios.post(LOANCARD_BASE_REST_API_URL, loan_card)
    }
}

export default new LoanCardService(); 