import styles from './style.module.css';

export const BudgetItem = ({
  brandCar,
  modelCar,
  nameClient,
  serviceList,
  totalPrice,
  whatsAppClient,
}) => {
  return (
    <div className={styles.container}>
      <h3>
        {brandCar} {modelCar} - Cliente: {nameClient} - WhatsApp:{' '}
        {whatsAppClient}
      </h3>
      <ul>
        {serviceList.map((service) => (
          <li key={service.id}>
            <h4>{service.nameService}</h4>
            <p>{service.priceService}</p>
          </li>
        ))}
      </ul>
      <div className={styles.totalBox}>
        <p>Total:</p>
        <p> {totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};
