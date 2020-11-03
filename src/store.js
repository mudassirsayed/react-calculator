import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from "redux-thunk";
import { addReducer} from './reducer/addReducer';
import { subReducer} from './reducer/subReducer';
import { mulReducer } from './reducer/mulReducer';
import { divReducer } from './reducer/divReducer';


const initialState ={  
};

const reducer = combineReducers({
    add:addReducer,
    sub:subReducer,
    mul:mulReducer,
    div:divReducer
})

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(reducer,initialState,composeEnhancers(applyMiddleware(thunk)));

export default store;