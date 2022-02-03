import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { exitErrorModal } from "actions/createActions";

const ErrorsModal = () => {
  const errorBlock = useRef();
  const { errors } = useSelector((state) => state.serviceListReducer);
  const dispatch = useDispatch();
  const closeErrorModal = () => {
    dispatch(exitErrorModal());
  };
  const clickWithoutBlock = (e) =>
    errorBlock.current === e.target && dispatch(exitErrorModal());

  useEffect(() => {
    document.addEventListener("click", (e) => clickWithoutBlock(e), false);
    return () =>
      document.removeEventListener("click", (e) => clickWithoutBlock(e), false);
  }, []);
  return (
    <div className="errors-modal">
      <div className="errors-text">
        <p> {errors}</p>
        <button onClick={closeErrorModal} className="btn btn-primary">
          Ok
        </button>
      </div>
      <div className="errors-background" ref={errorBlock} />
    </div>
  );
};

export { ErrorsModal };
