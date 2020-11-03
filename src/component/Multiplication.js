import React from 'react'
import { useDispatch } from 'react-redux';
import { mulAction } from '../action/mulAction';

export default function Multiplication(props) {
    const { valueone, valuetwo } = props;
    const dispatch = useDispatch()
    const Multiplication = (e) => {
        if(valueone==='' && valuetwo===''){
            return; 
          }
        dispatch(mulAction(valueone, valuetwo))
    }

    return (
        <div>
            <button className="mulbtn" onClick={Multiplication}>Multiply</button>
        </div>
    )
}
