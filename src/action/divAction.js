import { DIV_SUM } from '../constant/calculation';
export const divAction = (valueone, valuetwo) => (dispatch) => {

    const divValue = Number(valueone) / Number(valuetwo)
    dispatch({
        type: DIV_SUM,
        payload: divValue
    })
}