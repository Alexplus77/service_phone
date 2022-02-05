import {
  SERVICE_ADD_VALUE,
  ON_EDIT_MODE,

} from "actions/actionsTypes";

const initialState = {
  name: "",
  price: "",
  search:''
};
const serviceAddValueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_ADD_VALUE:
      const { name, value } = action.payload;
      return { ...state, [name]: value };

    case ON_EDIT_MODE:
      const data = action.payload;
      return { ...state, name: data.name, price: data.price };
    default:
      return state;
  }
};

export { serviceAddValueReducer };
