import React,{ useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { InputGroup,Form } from 'react-bootstrap';
import { decrement, increment, reset } from './assets/redux/counterSlice';


export default function Counter() {
  //component can acess the state by usSelector hook
  const counterValue = useSelector((state)=>state.counter.value)
  const[range,setRange]=useState(Number(1))
  
  //useDispach() is a hook used to call a method in action to update the state
  const dispatch =useDispatch();
 

  return (
    <>
    <div className='d-flex flex-column align-items-center justify-content-center w-100'>
        <h2 className='text-size text-dark fw-bold'>{counterValue}</h2>
        <div className='d-flex'>
            <button onClick={()=>dispatch(decrement(Number(range)))}className="btn btn-primary m-1">Decrement</button>
            <button onClick={()=>dispatch(increment(Number(range)))} className="btn btn-warning m-1">Increment</button>
            <button onClick={()=>dispatch(reset())}className="btn btn-dark m-1">Reset</button>
        </div>
    </div>
    <InputGroup 
    data-bs-theme="dark"
    onChange={(e)=>e.target.value===""?setRange(Number(1)):setRange(e.target.value)}
    className="mb-3 ms-1 me-1">
        <Form.Control
        type='number'
        className='no-spinners'
          placeholder="Enter The Range"
        />
      </InputGroup>
    </>
  )
}
