import React from 'react'
import { useDispatch } from 'react-redux';
import { addAction } from '../action/addAction';
import '../App.css';

export default function Addition(props) {
    const { valueone, valuetwo } = props;
    const dispatch = useDispatch()
    const Addition = (e) => {
        dispatch(addAction(valueone, valuetwo))
    }
    return (
        <div>
            <button onClick={Addition}>+</button>
        </div>
    )
}
