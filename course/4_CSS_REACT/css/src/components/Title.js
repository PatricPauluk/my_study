import styles from './Title.module.css';

// É utilizado como uma variável recebida por parâmetro

const Title = () => {
  return (
    <div>
      <h2 className={styles.my_title}>CSS Modules</h2>
    </div>
  );
}

export default Title;