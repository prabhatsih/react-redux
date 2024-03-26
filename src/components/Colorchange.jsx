import React, {useState} from 'react';
import { createStore } from 'redux';

function Colorchange() {

    const [style, setStyle] = useState({color:""})

    const reducer = (state={}, action)=>{
        if(action.type == "red"){
            return state = {
                color : "red"
            }
        }else if(action.type == "green"){
            return state = {
                color : "green"
            }
        }else if(action.type == "blue"){
            return state = {
                color : "blue"
            }
        }else if(action.type == "yellow"){
            return state = {
                color : "yellow"
            }
        }else if(action.type == "pink"){
            return state = {
                color : "pink"
            }
        }
    }

    const store = createStore(reducer);

    store.subscribe(()=>{
       const res =  store.getState();
    // alert(store.getState())
        setStyle(res)
    })

  return (
    <div>
      <h1 className='text-center text-3xl font-bold' style={style}>Color Change</h1>
      {/* <select onChange={(e)=>{alert(e.target.value)}}> */}
      <select onChange={(e)=>{store.dispatch({
        type : e.target.value
      })}}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="pink">Pink</option>
      </select>
    </div>
  )
}

export default Colorchange
