import styles from './CarDetails.module.css';

const CarDetails = ({ brand, color, km }) => {
  return (
    <div>
      <p className={styles.p_cars}>Brand: {brand} | Color: {color} | KM: {km}</p>
    </div>
  )
}

export default CarDetails;