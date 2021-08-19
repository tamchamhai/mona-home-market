const postAddToCart = (product) => {
  return {
    type: "POST_ADD_TO_CART",
    payload: product,
  };
};

export const postIncreaseQuatity = (res) => {
  return {
    type: "POST_INCREASE_QUATITY",
    payload: res,
  };
};

export const postDecreaseQuatity = (res) => {
  return {
    type: "POST_DECREASE_QUATITY",
    payload: res,
  };
};

export const postRemoveItem = (res) => {
  return {
    type: "POST_REMOVE_ITEM",
    payload: res,
  };
};
