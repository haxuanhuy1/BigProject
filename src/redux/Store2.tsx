
const isSeach = {
    id : 2,
    payload : false
}
const reduxSeach = (state= isSeach , actions : {type :string})=>{
   switch(actions.type) {
    case 'SEACHCREMENT': 
    return {
        ...state , 
        payload : true
    }
    case 'CLOSECREMENT':
       return {
        ...state , 
        payload : false
       }
    
    default :
    return state
   }
}
export default reduxSeach;