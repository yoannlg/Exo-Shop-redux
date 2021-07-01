import { createStore, combineReducers, applyMiddleware } from "redux";
import phoneReducer from './phone/phoneReducer'
import commentsReducer from './comments/commentsReducer';
import thunk from 'redux-thunk';
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  phone: phoneReducer,
  comments: commentsReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store;