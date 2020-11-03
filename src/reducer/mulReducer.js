import { MUL_SUM } from '../constant/calculation';

export const mulReducer = (state = { mull: '' }, action) => {
    switch (action.type) {
        case MUL_SUM:
            return {
                mull: action.payload
            }

        default:
            return state;
    }

}


