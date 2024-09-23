import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: JSON.parse(localStorage.getItem("cart") || "[]"),
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addcart: (state, action) => {
      let index = state.value.findIndex((item) => item._id == action.payload._id);
      let items = [];
      if (index < 0) {
        items = [...state.value, { ...action.payload, q: 1 }];
      } else {
        items = state.value.map((car, idx) => (idx === index ? { ...car, q: car.q + 1 } : car));
      }
      state.value = items;
      localStorage.setItem("cart", JSON.stringify(items));
    },
  },
});
export const { addcart } = cartSlice.actions;
export default cartSlice.reducer;
