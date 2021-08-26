import { DataCommodities } from "../../components/Data";

const initialState = {
  product: DataCommodities[1].goods,
  releaseProduct: DataCommodities[0].goods,
};

const cartReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "POST_ADD_TO_CART":
      return { ...state, product: payload };
    case "POST_INCREASE_QUATITY":
      let temProductIncrease = [...state.product];
      temProductIncrease[payload.index].quatity = payload.num;
      return { ...state, product: temProductIncrease };
    case "POST_DECREASE_QUATITY":
      let temProductDecrease = [...state.product];
      temProductDecrease[payload.index].quatity = payload.num;
      return { ...state, product: temProductDecrease };
    case "POST_REMOVE_ITEM":
      return { ...state, product: payload };

    default:
      return { ...state };
  }
};

export default cartReducer;
