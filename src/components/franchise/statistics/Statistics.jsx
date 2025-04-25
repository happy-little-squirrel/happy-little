import styles from './Statistics.module.css'

const St = ({number, info}) => {
    return (
        <div className={styles.statistic}>
            <h3 className={styles.number}>{number}</h3>
            <hr className={styles.hr}></hr>
            <p className={styles.info}>{info}</p>
        </div>
    )
}
export default St 
