import { createStore, combineReducers, applyMiddleware } from "redux";
import logger from "redux-logger"

const initialObjectMath = {
    result:1,
    valueChange: [],
    name:'max'
};

const initialObjectUser = {
    result: 1,
    valueChange: [],
    name: 'max'
};

// const mylogger = (store) => (next) => (action) => {
//     console.log(action);
//     next(action);
// };

const mathReducer = (state=initialObjectMath, action) => {
    switch(action.type){
        case "ADD":
            state = {
                ...state,
                result: state.result +=action.payload,
                valueChange: [...state.valueChange,action.payload]
            }

            state.result += action.payload;
            break;
        case "SUB":
            break;
    }   
    return state;
};

const userReducer = (state=initialObjectUser, action) => {
    switch(action.type){
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload,
                valueChange: [...state.valueChange,action.payload]
            }

            
            break;
        case "SUB":
            break;
    }   
    return state;
};

const store = createStore(
    combineReducers({mathReducer,userReducer}),
    {},
    applyMiddleware(logger)
);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type:"ADD",
    payload:100
});

store.dispatch({
    type:"ADD",
    payload:60
});

store.dispatch({
    type:"ADD",
    payload:50
});

store.dispatch({
    type:"SET_NAME",
    payload:'SENTHIL'
});

store.dispatch({
    type:"SET_NAME",
    payload:'RAJA'
});