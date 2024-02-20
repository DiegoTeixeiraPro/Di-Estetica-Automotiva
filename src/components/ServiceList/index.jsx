import { ServiceItem } from '../ServiceItem';

import styles from './style.module.css';

export const ServiceList = ({
  serviceList,
  removeServiceList,
}) => {
  return (
    <div className={styles.container}>
      {serviceList.length == 0 ? (
        <p>Nenhum serviço cadastrado</p>
      ) : (
        <ul>
          {serviceList.map((service) => {
            return (
              <ServiceItem
                key={service.id}
                service={service}
                removeServiceList={removeServiceList}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};
