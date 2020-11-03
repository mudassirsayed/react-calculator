import { SUB_SUM } from '../constant/calculation';
export const subAction = (valueone, valuetwo) => (dispatch) => {

    const subValue = Number(valueone) - Number(valuetwo)
    dispatch({
        type: SUB_SUM,
        payload: subValue
    })
}