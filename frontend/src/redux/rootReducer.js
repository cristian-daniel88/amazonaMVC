import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


import hamburguerReducer from "./hamburguer/hamburguerReducer";
import productReducer from "./product/productReducer";
import tokenReducer from "./token/tokenReducer";



const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: [],
};

const rootReducer = combineReducers({
    hamburguer: hamburguerReducer,
    product: productReducer,
    token: tokenReducer,

 
 
});

export default persistReducer(persistConfig, rootReducer);
