import React from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { serviceAdd, saveEditItem, exitEditMode } from "actions/createActions";

const Form_Edit = ({ id }) => {
  const { name, price } = useSelector((state) => state.serviceAddValueReducer);

  const dispatch = useDispatch();
  const handleValueChange = ({ target }) => {
    dispatch(serviceAdd(target.name, target.value));
  };
  const handleSubmitSave = (e) => {
    e.preventDefault();
    dispatch(saveEditItem(id, name, price));
  };
  const handleExitEditMode = (id) => dispatch(exitEditMode(id));
  return (
    <form
      className="form-edit"
      onSubmit={(e) => handleSubmitSave(e, name, price)}
    >
      <input
        onChange={handleValueChange}
        className="form-control"
        type="text"
        name="name"
        value={name}
      />
      <input
        onChange={handleValueChange}
        className="form-control"
        type="number"
        name="price"
        value={price}
      />
      <div className="btn-form-edit">
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <button
          onClick={() => handleExitEditMode(id)}
          type="button"
          className="btn btn-primary"
        >
          Exit
        </button>
      </div>
    </form>
  );
};

export { Form_Edit };
