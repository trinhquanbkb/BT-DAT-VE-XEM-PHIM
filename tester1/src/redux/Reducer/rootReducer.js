import {combineReducers} from 'redux'
import DatGheReducer from './DatGheReducer'

//store tổng của ứng dụng
const rootReducer = combineReducers({ 
    datGheReducer: DatGheReducer
})

export default rootReducer