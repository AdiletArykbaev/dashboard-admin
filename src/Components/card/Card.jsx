import styles from "./styles.module.css"


const Cards = ({profit,cost,sended,canceled})=>{
  
    return(
        <div className = {styles.container}>
            <div className={styles.profitCard}>
                    <p className={styles.text}>прибыль :{profit}</p>
            </div>
            <div className={styles.costCard}>
                    <p className={styles.text}>затраты:{cost}</p>
            </div>
            <div className={styles.sendedCard}>
                    <p className={styles.text}>отправленные sms:{sended}</p>
            </div>
            <div className={styles.canceledSms}>
                    <p className={styles.text}>отклоненные sms:{canceled}</p>
            </div>
        </div>
        )
}
export default Cards