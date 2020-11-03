import { SUB_SUM } from '../constant/calculation';

export const subReducer = (state = { subb: '' }, action) => {
    switch (action.type) {
        case SUB_SUM:
            return {
                subb: action.payload
            }

        default:
            return state;
    }

}