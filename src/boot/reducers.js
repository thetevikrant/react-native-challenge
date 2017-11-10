import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../screens/home/modules/reducers";

export default combineReducers({
  form: formReducer,
  homeReducer,
});
