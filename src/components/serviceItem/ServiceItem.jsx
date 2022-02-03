import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { valueItemEdit, onEditMode, removeItem } from "actions/createActions";
import { Form_Edit } from "components/form_edit";

const ServiceItem = ({ name, price, id, isEdit }) => {
  const { isEditService, errors } = useSelector(
    (state) => state.serviceListReducer
  );
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    dispatch(onEditMode({ name: name, price: price }));
    dispatch(valueItemEdit(id));
  };
  const handleRemoveItem = (id) => dispatch(removeItem(id));
  return (
    <li className="serviceItem">
      {isEdit ? (
        <Form_Edit id={id} />
      ) : (
        <>
          <i>{name}</i>
          <i>{price} руб.</i>
          <div className="edit-btn">
            <button
              onClick={() => handleEdit(id)}
              className="btn-edit"
              disabled={isEditService}
            >
              <i className="fa fa-pencil" aria-hidden="true" />
            </button>
            <button
              className="btn-edit"
              disabled={isEditService}
              onClick={() => handleRemoveItem(id)}
            >
              <i className="fa fa-times-circle-o" aria-hidden="true" />
            </button>
          </div>
        </>
      )}
    </li>
  );
};
export { ServiceItem };
