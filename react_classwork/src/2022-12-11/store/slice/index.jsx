import { createSlice } from "@reduxjs/toolkit";

const initalState = { user: null };
// slice is basically used in doc os we are following the convention
const slice = createSlice({
  name: "user",
  initalState,
  reducers: {
    // jo user dai ray haun woh action hai

    // pehly arg main state aye ga !
    setUser: (state, action) => { // setUser is just a name it can be anyone!
        
      state.user = action.payload; // payload mean values(data)
      return state;
    },
  },
})
export default slice.reducer