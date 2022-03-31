import { createStore } from "redux";
import { devToolsEnhancer } from 'redux-devtools-extension';
import CartReducer from "./reducers/cartreducer/CartReducer";

const store=createStore(CartReducer,devToolsEnhancer());
export default store; 
