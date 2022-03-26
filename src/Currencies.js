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
    let lastDaysData = Object.entries(gotData[1])

    console.log(lastDaysData)

    console.log(showLastDays)

    return (
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
                        {/* {lastDaysData.filter((e) => {
                            return el[1].Valute == showLastDays[1].Valute
                        })} */}
                    </div>
                )
            })}
            
        </div>
    )
}

export default Currencies;