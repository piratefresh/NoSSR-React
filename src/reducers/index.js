import {combineReducers} from "redux";
import auth from "./authReducer";
import forgot from "./forgotPasswordReducer";
import home from "./homeReducer";
import password from "./changePasswordReducer";

const rootReducer = combineReducers({
  auth,
  forgot,
  home,
  password
});

export default rootReducer;
