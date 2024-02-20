import styles from './style.module.css';

import bin from '../../assets/images/bin.svg';

export const ServiceItem = ({ service, removeServiceList }) => {
  return (
    <li>
      <h3 className={styles.nameService}>{service.nameService}</h3>
      <div>
        <button onClick={() => removeServiceList(service.id)}>
          <img src={bin} />
        </button>
        <p className={styles.priceService}>{service.priceService}</p>
      </div>
    </li>
  );
};
