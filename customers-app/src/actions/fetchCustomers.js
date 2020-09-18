
import { FETCH_CUSTOMERS } from '../constants/index'
import { createAction } from 'redux-actions'

// redux-action
const fetchCustomers =  createAction(FETCH_CUSTOMERS)
export default fetchCustomers