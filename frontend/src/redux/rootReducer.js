
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cart/cartReducer";
import emailReducer from "./email/emailReducer";


import hamburguerReducer from "./hamburguer/hamburguerReducer";
import notFoundReducer from "./notFound/notFoundReducer";
import productReducer from "./product/productReducer";
import tokenReducer from "./token/tokenReducer";
import updateReviewReducer from "./updateReview/updateReviewReducer";
import userReducer from "./user/userReducer";
import userImgReducer from "./userImage/userImageReducer";



const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
    hamburguer: hamburguerReducer,
    product: productReducer,
    token: tokenReducer,
    notFound: notFoundReducer,
    imgUser: userImgReducer,
    email: emailReducer,
    cart: cartReducer,
    user: userReducer,
    reviews : updateReviewReducer,
 

 
 
});

export default persistReducer(persistConfig, rootReducer);
