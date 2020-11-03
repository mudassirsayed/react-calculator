
import { ADD_SUM } from '../constant/calculation';

export const addReducer = (state = { sum: '' }, action) => {
    switch (action.type) {
        case ADD_SUM:
            return {
                sum: action.payload
            }

        default:
            return state;
    }

}


