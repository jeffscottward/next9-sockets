function dateReducer(state, action) {
  // console.log("user", state)
  switch (action.type) {
    case "LAST_REQUEST_TIME":
      // Do something with action.payload
      state.time = action.payload;
      return { ...state };
    default:
      return { ...state };
  }
}

function cartReducer(state, action) {
  // console.log("cart", state);
  switch (action.type) {
    case "DECREMENT_QUANTITY":
      if (state.jacket.quantity > 0) {
        state.jacket.quantity--;
      }
      return { ...state };
    case "INCREMENT_QUANTITY":
      state.jacket.quantity++;
      return { ...state };
    case "CHANGE_SIZE":
      state.jacket.size = action.payload;
      return { ...state };
    case "CHANGE_CRYPTO":
      state.jacket.crypto = action.payload;
      return { ...state };
    case "CHANGE_USERINFO":
      let blobarea = Object.keys(action.payload)[0];
      let inputField = Object.keys(action.payload[blobarea])[0];
      state[blobarea][inputField] = action.payload[blobarea][inputField];
      return { ...state };
    default:
      return { ...state };
  }
}

export default function mainReducer ({ date, cart }, action) {
  // middleware goes here, i.e calling analytics service, etc.
  console.log(action)
  return {
    date: dateReducer(date, action),
    cart: cartReducer(cart, action)
  };
}