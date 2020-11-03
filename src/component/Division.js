import React from 'react';
import { useDispatch } from 'react-redux';
import { divAction } from '../action/divAction';

export default function Division(props) {
    const { valueone, valuetwo } = props;
    const dispatch = useDispatch()


    const Division = (e) => {
        dispatch(divAction(valueone, valuetwo))
    }

    return (
        <div>
            <button onClick={Division}>/</button>
        </div>
    )
}
