import styles from './Statistics.module.css'

const Statistic = ({name, price}) => {
    return (
        <div className={styles.statistic}>
        <h3 className={styles.name}>{name}</h3>
        <hr className={styles.hr}></hr>
        <p className={styles.price}>{price}</p>
    </div>
    )
}

export default Statistic 

