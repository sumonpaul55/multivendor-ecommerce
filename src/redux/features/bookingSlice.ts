import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { TSlot } from "../../types/Slots";



type TInitialState = {
  carts: TSlot[];
};
const initialState: TInitialState = {
  carts: [],
};

const bookingSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {
      addToCart: (state, action: PayloadAction<TSlot>) => {
        state.carts.push({ ...action.payload  });
      },
  
      
      deleteItem: (state, action: PayloadAction<TSlot>) => {
        state.carts = state.carts.filter(
          (item) => item._id !== action.payload._id
        );
      },
  
      clearCart: (state) => {
        state.carts = [];
      },
    }
})



export const {addToCart, clearCart, deleteItem  } = bookingSlice.actions;

export default bookingSlice.reducer;

export const currentToken = (state: RootState) => state.auth.token;
export const currentUser = (state: RootState) => state.auth.user;
