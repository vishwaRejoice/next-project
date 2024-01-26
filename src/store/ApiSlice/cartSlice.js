import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/base";
import { adminHeader, authHeader, setSession } from "../../helpers/authHelper";

const initialState = {
  isCartSidebar : false
};


export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setIsCartSidebar: (state, action) => {
      state.isCartSidebar = action.payload;
    },
    addToCart: (state, action) => {
        console.log("ssss",state,action)
        const itemExists = state?.find((item) => item?.id === action?.payload?.id);
        if (itemExists) {
          itemExists.quantity++;
        } else {
          state.push({ ...action.payload, quantity: 1 });
        }
      },
 
  },
});

export const {
    setIsCartSidebar,
    addToCart,
} = cartSlice.actions;
export default cartSlice.reducer;
