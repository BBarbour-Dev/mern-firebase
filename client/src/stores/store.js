import { createStore, action } from "easy-peasy";

const store = createStore({
  authorized: false,
  setAuthorized: action((state, payload) => {
    state.authorized = true;
  }),
  setUnauthorized: action((state, payload) => {
    state.authorized = false;
  })
});

export default store;
