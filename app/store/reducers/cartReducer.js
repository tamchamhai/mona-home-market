const initialState = {
  product: [
    {
      unit: "kg",
      name: "Shrimp",
      price: 230000,
      image: require("../../assets/images/meal.png"),
      quatity: 1,
    },
    {
      unit: "kg",
      name: "Tôm",
      price: 230000,
      image: require("../../assets/images/meal.png"),
      quatity: 1,
    },
    {
      unit: "kg",
      name: "Sườn non heo tươi C.P khay 300g",
      price: 130000,
      image: require("../../assets/images/meal.png"),
      quatity: 1,
    },
    {
      unit: "kg",
      name: "Thịt heo xay G khay 300g",
      price: 330000,
      image: require("../../assets/images/meal.png"),
      quatity: 1,
    },
  ],
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
