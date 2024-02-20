import { BudgetItem } from '../BudgetItem';
import styles from './style.module.css';

export const Budget = ({
  brandCar,
  modelCar,
  nameClient,
  serviceList,
  totalPrice,
  whatsAppClient,
  setGeneratedBudgetData,
  setBudgetGenerated
}) => {

  const copyAndPaste = () => {
    const textToCopy = `
Orçamento de serviços | DiEstética automotiva

VEÍCULO: ${brandCar} ${modelCar} - CLIENTE: ${nameClient} - WHATSAPP: ${whatsAppClient}
SERVIÇOS: ${serviceList.map(service => ` ${service.nameService}: ${service.priceService}`)} - Total: ${totalPrice.toFixed(2)}
    `;

    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        console.log('Success copy');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const cleanBudget = () => {
    setGeneratedBudgetData(null)
    setBudgetGenerated(false)
  };

  return (
    <div className={styles.container}>
      <h2>
        <span>Di</span>Estética Automotiva
      </h2>
      <p>Orçamento de serviço de Estética automotiva do veículo:</p>
      <BudgetItem
        brandCar={brandCar}
        modelCar={modelCar}
        nameClient={nameClient}
        serviceList={serviceList}
        totalPrice={totalPrice}
        whatsAppClient={whatsAppClient}
      />
      <div className={styles.buttonBox}>
        <button onClick={cleanBudget}>Limpar orçamento</button>
        <button onClick={copyAndPaste}>Gerar texto copia e cola</button>
      </div>
    </div>
  );
};
