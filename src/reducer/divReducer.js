
import { DIV_SUM } from '../constant/calculation';

export const divReducer = (state = { divv: '' }, action) => {
    switch (action.type) {
        case DIV_SUM:
            return {
                divv: action.payload
            }

        default:
            return state;
    }

}


