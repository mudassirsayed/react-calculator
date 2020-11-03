import { ADD_SUM } from '../constant/calculation';
export const addAction = (valueone, valuetwo) => (dispatch) => {

    const addValue = Number(valueone) + Number(valuetwo)
    dispatch({
        type: ADD_SUM,
        payload: addValue
    })
}