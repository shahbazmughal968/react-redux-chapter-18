import { createSlice, configureStore } from "@reduxjs/toolkit";
const initalState = { counter: 0, showCounter: true };
const initialAuthState={isAuthenticated:true};
const counterSlice = createSlice({
  name: "counter",
  initialState:initalState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    plus_5(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const authSlice =createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        login(state)
        {
            state.isAuthenticated=false;
        },
        logout(state)
        {
            state.isAuthenticated=true
        }
    }
})
const store = configureStore({
  reducer: {counter:counterSlice.reducer,authentication:authSlice.reducer}
});
export const counterActions = counterSlice.actions;
export const authActions=authSlice.actions;
export default store;
