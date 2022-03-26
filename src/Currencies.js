import { useState } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import date from './date.js';
import useCurrencyData from './useCurrencyData';

import styles from './styles.module.css';

function Currencies({}){

    const [showLastDays, setShowLastData] = useState('')

    let gotData = useCurrencyData(date)

    let todaysData = Object.entries(gotData[0])
    let lastDaysData = gotData[1]
    
    let lastDaysInfo = {
        dates: [],
        values: []
    };

    if(showLastDays !== ''){
        let dates = lastDaysData.map(el => {
            return (el.Date).slice(0, 10)
        });    

        let values = lastDaysData.map(el => {
            return (el.Valute[showLastDays[0]].Value).toFixed(2)
        });

        lastDaysInfo.dates = dates;
        lastDaysInfo.values = values;
    }
    console.log(lastDaysInfo)

    return (
        <div className={styles.parent}>
            <div className={styles.main}>
                <div className={styles.title}>
                        <p>Имя валюты</p>
                    <div>
                        <p>Рублей</p>
                        <p>Изменение %</p>
                    </div>
                </div>
                <hr />
                {todaysData.map((el, i) => {
                    return (
                        <div>
                            <Tooltip 
                                followCursor="true" 
                                hideOnClick="false" 
                                html={
                                    <div>{el[1].CharCode}</div>
                                }>
                                    <div key={i} className={styles.infoDiv} onClick={() => {
                                        setShowLastData(el);
                                    }}>
                                        <li>{el[1].Name}</li>
                                        <ul>
                                            <li>{(el[1].Value).toFixed(2)}</li>
                                            <li>{(((el[1].Value - el[1].Previous) / el[1].Previous) * 100).toFixed(2)}</li>
                                        </ul>
                                    </div>
                            </Tooltip>
                        </div>
                    )
                })}
            </div>
            {showLastDays !== '' 
            ? <div className={styles.lastDaysDataMain}>
                <div className={styles.title}>
                        <li>Дата</li>
                        <li>{showLastDays[0]}</li>
                        <li>Рублей</li>
                </div>
                <hr />
                {lastDaysInfo.dates.map((el, i) => {
                        return (
                            <div className={styles.lastDaysData}>
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

export default Currencies;