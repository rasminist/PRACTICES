import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddlewere from "redux-saga"

import rootReducer from "./RootReducer";


const sagaMiddleware=createSagaMiddlewere();
const Store =configureStore({
    reducer:rootReducer,
    middleware:()=>[sagaMiddleware]
});
sagaMiddleware.run()


export default Store;