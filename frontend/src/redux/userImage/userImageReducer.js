import {USERIMG} from './userImageActions';


const INITIAL_STATE = {
    img: '',
    
   };
   
   const userImgReducer = (state = INITIAL_STATE, action) => {
     switch (action.type) {
       case USERIMG:
         return {
           ...state,
           img: action.payload,
         }
   
   
   
       default:
         return state;
     }
   };
   
   export default userImgReducer;