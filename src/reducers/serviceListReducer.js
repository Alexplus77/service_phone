import {
  SERVICE_SUBMIT,
  VALUE_ITEM_EDIT,
  SAVE_ITEM_EDIT,
  REMOVE_ITEM,
  EXIT_EDIT_MODE,
  EXIT_ERROR_MODAL,
    HANDLE_FILTER_ITEM
} from "actions/actionsTypes";
import { nanoid } from "nanoid";
const initialState = {
  services: [],
  isEditService: false,
  editItem: "",
  errors: null,
  searchItem:[]
};
const error = "Такое наименование услуги уже есть, выберите другое!!!";

const serviceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SERVICE_SUBMIT:
      const { name, price } = action.payload;
      const findName = state.services.find((elem) => elem.name === name);
      if (findName) {
        return {
          ...state,
          errors: error,
        };
      } else {
        return {
          ...state,
          services: [
            ...state.services,
            {
              name,
              price,
              id: nanoid(),
              isEdit: false,
            },
          ],
          searchItem: []
        };
      }

    case SAVE_ITEM_EDIT:
      const itemEdit = action.payload;
      const findNameEdit = state.services.some((elem) => {
        return elem.id !== itemEdit.id && elem.name === itemEdit.name;
      });

      if (findNameEdit) {
        return {
          ...state,
          errors: error,
        };
      } else {
        const changedItem = state.services.map((elem) => {
          if (elem.id === itemEdit.id) {
            elem.name = itemEdit.name;
            elem.price = itemEdit.price;
            elem.isEdit = false;
          }
          return elem;
        });
        return {
          ...state,
          services: changedItem,
          isEditService: false,
          searchItem: []
        };
      }

    case VALUE_ITEM_EDIT:
      const id = action.payload;
      const items = state.services.map((elem) => {
        if (elem.id === id) {
          elem.isEdit = true;
        }
        return elem;
      });
      return { ...state, services: items, isEditService: true, editItem: id };

    case EXIT_EDIT_MODE:
      const idItems = action.payload;
      const serviceItems = state.services.map((elem) => {
        if (elem.id === idItems) {
          elem.isEdit = false;
        }
        return elem;
      });
      return {
        ...state,
        services: serviceItems,
        isEditService: false,
        editItem: "",
        searchItem: []
      };

    case REMOVE_ITEM:
      const idRemovingItem = action.payload;
      return {
        ...state,
        services: [...state.services.filter(({ id }) => id !== idRemovingItem)],
        searchItem: []
      };

    case EXIT_ERROR_MODAL:
      return { ...state, errors: null };

    case HANDLE_FILTER_ITEM:
      const value=action.payload

        const filteredItem=state.services.filter(({name})=>
               [...name].slice(0, value.length).every((elem, i)=>elem===value[i])
        )

      return {...state, searchItem: filteredItem}
    default:
      return state;
  }
};

export { serviceListReducer };
