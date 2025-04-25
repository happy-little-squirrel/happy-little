import styles from './Block.module.css';

const Block = ({ img, heading, title }) => {
  return (
    <div className={styles.block}>
      <img className={styles.img} src={img}></img>
      <h2>{heading}</h2>
      <p className={styles.title}>{title}</p>
    </div>
  );
};

export default Block;
