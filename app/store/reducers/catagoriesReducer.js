import { DataCommodities } from "../../components/Data";

const initialState = {
  category: DataCommodities,
};

const CatagoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "abc":
      break;

    default:
      return { ...state };
  }
};

export default CatagoriesReducer;
