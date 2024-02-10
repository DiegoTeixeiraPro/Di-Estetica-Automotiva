import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

import { ServiceList } from "../ServiceList";
import { Budget } from "../Budget";
import { Input } from "../Input";
import { Select } from "../Select";

import { carOptions } from "../../mocks/carOptions";

export const Form = () => {
  const [nameClient, setNameClient] = useState("");
  const [whatsAppClient, setWhatsAppClient] = useState("");

  const [brandCar, setBrandCar] = useState("");
  const [modelCar, setModelCar] = useState("");

  const [nameService, setNameService] = useState("");
  const [priceService, setPriceService] = useState("");
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
    const newServiceList = serviceList.filter((service) => service.id !== serviceId);
    setServiceList(newServiceList);
    calculateTotal(newServiceList);
  };

  const calculateTotal = (services) => {
    const total = services.reduce((acc, service) => acc + parseFloat(service.priceService || 0), 0);
    setTotalPrice(total);
  };

  const submitService = (event) => {
    event.preventDefault();
    const formData = { nameService, priceService };
    addServiceList(formData);
    setNameService("");
    setPriceService("");
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

    setNameClient("");
    setWhatsAppClient("");
    setBrandCar("");
    setModelCar("");
    setServiceList([]);
    setTotalPrice(0);

    setBudgetGenerated(true);
  };

  return (
    <div>
      <div>
        <div>
          <div>
            <h3>Informações do cliente</h3>
            <form onSubmit={submitService} className="form">
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
            </form>
          </div>

          <div>
            <h3>Informações do veículo</h3>
            <form onSubmit={submitService} className="form">
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
            </form>
          </div>
        </div>

        <div>
          <div>
            <h3>Adicionar serviço</h3>
            <form onSubmit={submitService} className="form">
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
            </form>
          </div>

          <div>
            <h3>Serviços adicionados</h3>
            <ServiceList serviceList={serviceList} removeServiceList={removeServiceList} />
            <p>Total: {totalPrice.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div>
        <button onClick={generateBudget}>Gerar orçamento</button>
      </div>

      {budgetGenerated && generatedBudgetData && (
        <div>
          <Budget
            brandCar={generatedBudgetData.brandCar}
            modelCar={generatedBudgetData.modelCar}
            nameClient={generatedBudgetData.nameClient}
            serviceList={generatedBudgetData.serviceList}
            totalPrice={generatedBudgetData.totalPrice}
            whatsAppClient={generatedBudgetData.whatsAppClient}
          />
        </div>
      )}
    </div>
  );
};
