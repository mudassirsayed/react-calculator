import React from 'react'
import { useDispatch } from 'react-redux';
import { mulAction } from '../action/mulAction';

export default function Multiplication(props) {
    const { valueone, valuetwo } = props;
    const dispatch = useDispatch()
    const Multiplication = (e) => {
        dispatch(mulAction(valueone, valuetwo))
    }

    return (
        <div>
            <button onClick={Multiplication}>*</button>
        </div>
    )
}
