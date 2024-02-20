import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { ServiceList } from '../ServiceList';
import { Budget } from '../Budget';
import { Input } from '../Input';
import { Select } from '../Select';

import { carOptions } from '../../mocks/carOptions';

import styles from './style.module.css';

export const Form = () => {
  const [nameClient, setNameClient] = useState('');
  const [whatsAppClient, setWhatsAppClient] = useState('');

  const [brandCar, setBrandCar] = useState('');
  const [modelCar, setModelCar] = useState('');

  const [nameService, setNameService] = useState('');
  const [priceService, setPriceService] = useState('');
  const [serviceList, setServiceList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const [budgetGenerated, setBudgetGenerated] = useState(false);
  const [generatedBudgetData, setGeneratedBudgetData] = useState(null);

  const addServiceList = (formData) => {
    const newService = { ...formData, id: uuidv4() };
    const newServiceList = [...serviceList, newService];
    setServiceList(newServiceList);
    calculateTotal(newServiceList);
  };

  const removeServiceList = (serviceId) => {
    const newServiceList = serviceList.filter(
      (service) => service.id !== serviceId
    );
    setServiceList(newServiceList);
    calculateTotal(newServiceList);
  };

  const calculateTotal = (services) => {
    const total = services.reduce(
      (acc, service) => acc + parseFloat(service.priceService || 0),
      0
    );
    setTotalPrice(total);
  };

  const submitService = (event) => {
    event.preventDefault();
    const formData = { nameService, priceService };
    addServiceList(formData);
    setNameService('');
    setPriceService('');
  };

  const generateBudget = () => {
    const budgetData = {
      brandCar,
      modelCar,
      nameClient,
      serviceList,
      totalPrice,
      whatsAppClient,
    };
    setGeneratedBudgetData(budgetData);

    setNameClient('');
    setWhatsAppClient('');
    setBrandCar('');
    setModelCar('');
    setServiceList([]);
    setTotalPrice(0);

    setBudgetGenerated(true);
  };

  return (
    <div className={styles.componentContainer}>
      <form onSubmit={submitService} className={styles.formContainer}>
        <div className={styles.formBoxClientVehicle}>
          <div className={styles.formBoxClient}>
            <h3>Informações do cliente</h3>
            <Input
              label="Nome"
              placeholder="Digite o nome do cliente"
              type="text"
              value={nameClient}
              onChange={(event) => setNameClient(event.target.value)}
            />
            <Input
              label="WhatsApp"
              placeholder="Digite o WhatsApp do cliente"
              type="text"
              value={whatsAppClient}
              onChange={(event) => setWhatsAppClient(event.target.value)}
            />
          </div>

          <div className={styles.formBoxVehicle}>
            <h3>Informações do veículo</h3>
            <Select
              label="Marca"
              options={carOptions}
              value={brandCar}
              onChange={(event) => setBrandCar(event.target.value)}
            />
            <Input
              label="Modelo"
              placeholder="Digite o modelo do veículo"
              type="text"
              value={modelCar}
              onChange={(event) => setModelCar(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.formBoxServiceAddedServices}>
          <div className={styles.formBoxService}>
            <h3>Adicionar serviço</h3>
            <Input
              label="Nome"
              placeholder="Ex. Lavagem"
              type="text"
              value={nameService}
              onChange={(event) => setNameService(event.target.value)}
            />
            <Input
              label="Preço"
              placeholder="Ex. 80,00"
              type="number"
              value={priceService}
              onChange={(event) => setPriceService(event.target.value)}
            />
            <button type="submit">Adicionar</button>
          </div>

          <div className={styles.formBoxAddedServices}>
            <h3>Serviços adicionados</h3>
            <ServiceList
              serviceList={serviceList}
              removeServiceList={removeServiceList}
            />
            {totalPrice != 0 && (
              <div className={styles.totalAddedServiceBox}>
                <p className={styles.totalAddedService}>Total:</p>
                <p className={styles.totalAddedService}>
                  {totalPrice.toFixed(2)}
                </p>
              </div>
            )}
          </div>
        </div>
      </form>
      <button className={styles.btnGenerate} onClick={generateBudget}>
        Gerar orçamento
      </button>

      {budgetGenerated && generatedBudgetData && (
        <div>
          <Budget
            brandCar={generatedBudgetData.brandCar}
            modelCar={generatedBudgetData.modelCar}
            nameClient={generatedBudgetData.nameClient}
            serviceList={generatedBudgetData.serviceList}
            totalPrice={generatedBudgetData.totalPrice}
            whatsAppClient={generatedBudgetData.whatsAppClient}

            setGeneratedBudgetData={setGeneratedBudgetData}
            setBudgetGenerated={setBudgetGenerated}
          />
        </div>
      )}
    </div>
  );
};
