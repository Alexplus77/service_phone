import React, { useRef } from "react";
import "App.css";
import { useDispatch, useSelector } from "react-redux";
import { serviceAdd, serviceSubmit } from "actions/createActions";

const Form_Input = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const { name, price } = useSelector((state) => state.serviceAddValueReducer);
  const { isEditService } = useSelector((state) => state.serviceListReducer);

  const handleValueChange = ({ target }) =>
    dispatch(serviceAdd(target.name, target.value));

  const handleSubmitService = (e, name, price) => {
    e.preventDefault();
    dispatch(serviceSubmit(name, price));
    form.current.reset();
  };
  return (
    <form
      className="form-group"
      ref={form}
      onSubmit={(e) => handleSubmitService(e, name, price)}
    >
      <input
        onChange={handleValueChange}
        className="form-control"
        type="text"
        name="name"
        defaultValue=""
        placeholder="Название услуги"
        required={true}
        disabled={isEditService}
      />
      <input
        onChange={handleValueChange}
        className="form-control"
        type="number"
        name="price"
        defaultValue=""
        placeholder="Стоимость услуги"
        required={true}
        disabled={isEditService}
      />
      <button
        type="submit"
        className="btn btn-primary"
        disabled={isEditService}
      >
        Add
      </button>
    </form>
  );
};

export { Form_Input };
