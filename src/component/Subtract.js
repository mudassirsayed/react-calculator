import React from 'react'
import { useDispatch } from 'react-redux';
import { subAction } from '../action/subAction';

export default function Subtract(props) {
    const { valueone, valuetwo } = props;
    const dispatch = useDispatch()
    const Subtraction = (e) => {
        if(valueone==='' && valuetwo===''){
            return; 
          }
        dispatch(subAction(valueone, valuetwo))
    }

    return (
        <div>
            <button className="subbtn" onClick={Subtraction}>Substract</button>
        </div>
    )
}
