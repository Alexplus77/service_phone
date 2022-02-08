import React, {useEffect, useState} from "react";
import { ServiceItem } from "components/serviceItem";
import { useSelector } from "react-redux";
const ServiceList = () => {
  const { services } = useSelector((state) => state.serviceListReducer);
    const {search} = useSelector((state) => state.serviceAddValueReducer);
  const [items, setItems]=useState(null)


useEffect(()=>{
    const searchItem=services.filter(({name})=>
        [...name].slice(0, search.length).every((elem, i)=>elem===search[i]))
    setItems(() =>  search.length ? searchItem : services)
}, [services, search])


  return (
    <ul className="container-items">
      <h1>Список услуг</h1>
      {
          services.length ? (
        items?.map(({ name, price, id, isEdit }) => (
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
