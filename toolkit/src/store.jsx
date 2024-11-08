import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./bgcolorSlice";
const store=configureStore({
   reducer:{ mycolor:colorReducer}
})
export default store;