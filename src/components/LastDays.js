import styles from '../styles/styles.module.css';

const LastDays = ({ showLastDays, lastDaysInfo }) => {

    return (
        <div>
            {showLastDays !== '' 
            ? <div className={styles.lastDaysDataMain}>
                <div className={styles.title}>
                    <ul>
                        <li>Дата</li>
                        <li>{showLastDays[1].Nominal}</li>
                        <li>{showLastDays[0]}</li>
                        <li>Рублей</li>
                    </ul>
                </div>
                {lastDaysInfo.dates.map((el, i) => {
                        return (
                            <div key={i} className={styles.lastDaysData}>
                                <ul>
                                    <li>{el}</li>
                                    <li>{lastDaysInfo.values[i]}</li>
                                </ul>
                            </div>
                        )
                })}
            </div> 
            : ""}
        </div>
    )

}

export default LastDays;