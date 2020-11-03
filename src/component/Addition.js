import React from 'react'
import { useDispatch } from 'react-redux';
import { addAction } from '../action/addAction';
import '../App.css';

export default function Addition(props) {
    const { valueone, valuetwo } = props;
    const dispatch = useDispatch()
    const Addition = (e) => {
        if(valueone==='' && valuetwo===''){
            return; 
          }
        dispatch(addAction(valueone, valuetwo))
    }
    return (
        <div>
            <button className="addbtn" onClick={Addition}>Add</button>
        </div>
    )
}
