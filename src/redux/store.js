import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { weatherReducer } from "./weather/weatherReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

export const store = createStore(
  weatherReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
