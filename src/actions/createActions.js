import {
  SERVICE_ADD_VALUE,
  SERVICE_SUBMIT,
  SAVE_ITEM_EDIT,
  VALUE_ITEM_EDIT,
  REMOVE_ITEM,
  EXIT_EDIT_MODE,
  ON_EDIT_MODE,
  EXIT_ERROR_MODAL,

} from "./actionsTypes";

export const serviceAdd = (name, value) => ({
  type: SERVICE_ADD_VALUE,
  payload: { name, value },
});
export const serviceSubmit = (name, price) => ({
  type: SERVICE_SUBMIT,
  payload: { name, price },
});
export const valueItemEdit = (id) => ({
  type: VALUE_ITEM_EDIT,
  payload: id,
});
export const onEditMode = (data) => ({
  type: ON_EDIT_MODE,
  payload: data,
});

export const saveEditItem = (id, name, price) => ({
  type: SAVE_ITEM_EDIT,
  payload: { id, name, price },
});
export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  payload: id,
});
export const exitEditMode = (id) => ({
  type: EXIT_EDIT_MODE,
  payload: id,
});
export const exitErrorModal = () => ({
  type: EXIT_ERROR_MODAL,
});
