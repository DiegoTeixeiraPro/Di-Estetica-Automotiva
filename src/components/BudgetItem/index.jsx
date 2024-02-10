export const BudgetItem = ({ brandCar, modelCar, nameClient, serviceList, totalPrice, whatsAppClient }) => {
  return (
    <div>
      <p>
        {brandCar} {modelCar} - Cliente: {nameClient} - WhatsApp: {whatsAppClient}
      </p>
      <ul>
        {serviceList.map((service) => (
          <li key={service.id}>
            <h3>{service.nameService}</h3>
            <p>{service.priceService}</p>
          </li>
        ))}
      </ul>
      <p>Total: {totalPrice.toFixed(2)}</p>
    </div>
  );
};
