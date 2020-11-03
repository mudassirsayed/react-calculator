import React from 'react';
import { useDispatch } from 'react-redux';
import { divAction } from '../action/divAction';

export default function Division(props) {
    const { valueone, valuetwo } = props;
    const dispatch = useDispatch()
    const Division = (e) => {
        if(valueone==='' && valuetwo===''){
            return; 
          }
        dispatch(divAction(valueone, valuetwo))
    }

    return (
        <div>
            <button className="divbtn" onClick={Division}>Divide</button>
        </div>
    )
}
