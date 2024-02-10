import { ServiceItem } from "../ServiceItem";

export const ServiceList = ({ serviceList, removeServiceList }) => {
  return (
    <>
      {serviceList.length == 0 ? (
        <p>Sem serviços cadastrados</p>
      ) : (
        <ul>
          {serviceList.map((service) => {
            return <ServiceItem key={service.id} service={service} removeServiceList={removeServiceList} />;
          })}
        </ul>
      )}
    </>
  );
};
