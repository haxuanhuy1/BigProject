const initState = {
    id : 1 ,
    payload : true
}

const reduxStore = (state= initState , actions : {type : string})=>{
    switch(actions.type){
        case 'DECREMENT': 
        return {
          ...state, 
          payload : false
       
        }
       
          default :
          return state
      }
}
export default reduxStore;
