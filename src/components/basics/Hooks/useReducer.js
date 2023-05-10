import React from 'react'
import { useReducer,useState } from 'react'

const reducer =(state,action)=>{
    if(action.type==='INCR') {
        state=state+1;
    }
    if(state>0 && action.type==='DECR'){
        state=state-1;
    }
    return state;
}

const UseReducer = () => { 
   const initialstate=10;
   const [state, dispatch] = useReducer(reducer,initialstate)
 
  return (  
    <>
      <div className="center_div">
        <p>{state}</p>
        <div class="button2" onClick={()=>{dispatch({type:'INCR'})}}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div  
          class="button2"
          onClick={()=>{dispatch({type:'DECR'})}}> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>
    </>
  )
}

export default UseReducer
