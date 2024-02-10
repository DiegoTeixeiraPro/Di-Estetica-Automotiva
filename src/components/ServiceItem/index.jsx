export const ServiceItem = ({ service, removeServiceList }) => {
  return (
    <li>
      <h3>{service.nameService}</h3>
      <p>{service.priceService}</p>
      <button onClick={() => removeServiceList(service.id)}>Excluir</button>
    </li>
  );
};
