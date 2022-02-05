import "App.css";
import { Form_Input } from "components/form_input";
import { ServiceList } from "components/service_list";
import {Filter_Item} from "components/filter_item";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { exitEditMode } from "actions/createActions";
import { ErrorsModal } from "components/errors_modal";

function App() {
  const dispatch = useDispatch();
  const { isEditService, editItem, errors } = useSelector(
    (state) => state.serviceListReducer
  );
  const keyDownEsc = (e, editItem) => {
    if (e.key === "Escape") {
      dispatch(exitEditMode(editItem));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => keyDownEsc(e, editItem));
    return () =>
      document.removeEventListener("keydown", (e) => keyDownEsc(e, editItem));
  }, [isEditService]);

  return (
    <>
      {errors && <ErrorsModal />}
      <div className="container">
        <Filter_Item/>
        <Form_Input />
        <ServiceList />
      </div>
    </>
  );
}

export default App;
