import React from "react";
import { ServiceItem } from "components/serviceItem";
import { useSelector } from "react-redux";
const ServiceList = () => {
  const { services } = useSelector((state) => state.serviceListReducer);

  return (
    <ul className="container-items">
      <h1>Список услуг</h1>
      {services.length ? (
        services?.map(({ name, price, id, isEdit }) => (
          <ServiceItem
            key={id}
            name={name}
            id={id}
            price={price}
            isEdit={isEdit}
          />
        ))
      ) : (
        <h3>Пока нет ни одной услуги!</h3>
      )}
    </ul>
  );
};
export { ServiceList };
