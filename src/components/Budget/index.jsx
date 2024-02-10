import { BudgetItem } from "../BudgetItem";

export const Budget = ({ brandCar, modelCar, nameClient, serviceList, totalPrice, whatsAppClient }) => {
  return (
    <div>
      <h3>DiEstética automotiva</h3>
      <p>Orçamento de serviço de Estética automotiva do veículo</p>
      <BudgetItem
        brandCar={brandCar}
        modelCar={modelCar}
        nameClient={nameClient}
        serviceList={serviceList}
        totalPrice={totalPrice}
        whatsAppClient={whatsAppClient}
      />
    </div>
  );
};
