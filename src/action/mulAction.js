import { MUL_SUM } from '../constant/calculation';
export const mulAction = (valueone, valuetwo) => (dispatch) => {

   const mulValue = Number(valueone) * Number(valuetwo)
   dispatch({
      type: MUL_SUM,
      payload: mulValue
   })
}