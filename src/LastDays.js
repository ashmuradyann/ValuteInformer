import styles from './styles.module.css';

function LastDays({ showLastDays, lastDaysInfo }){

    return (
        <div>
            {showLastDays !== '' 
            ? <div className={styles.lastDaysDataMain}>
                <div className={styles.title}>
                        <li>Дата</li>
                        <li>{showLastDays[1].Nominal}</li>
                        <li>{showLastDays[0]}</li>
                        <li>Рублей</li>
                </div>
                <hr />
                {lastDaysInfo.dates.map((el, i) => {
                        return (
                            <div key={i} className={styles.lastDaysData}>
                                <li>{el}</li>
                                <li>{lastDaysInfo.values[i]}</li>
                            </div>
                        )
                })}
            </div> 
            : ""}
        </div>
    )

}

export default LastDays;