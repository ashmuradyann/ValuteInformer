import { useState } from 'react';

import date from '../api/date.js';
import useCurrencyData from '../api/useCurrencyData';

import LastDays from './LastDays.js';
import Todays from './Todays.js';

import styles from '../styles/styles.module.css';

function Currencies(){

    const [showLastDays, setShowLastData] = useState('')
    
    const gotData = useCurrencyData(date)

    const todaysData = Object.entries(gotData[0])
    const lastDaysData = gotData[1]
    
    let lastDaysInfo = {
        dates: [],
        values: []
    };

    if(showLastDays !== ''){
        let dates = lastDaysData?.map(el => {
            return (el.Date).slice(0, 10).replaceAll("-", ".")
        });    

        let values = lastDaysData?.map(el => {
            if(typeof el.Valute[showLastDays[0]].Value === "number"){
                return (el.Valute[showLastDays[0]].Value).toFixed(2)
            }

            return el.Valute[showLastDays[0]].Value
        });

        lastDaysInfo.dates = dates;
        lastDaysInfo.values = values;
    }

    return (
        <div className={styles.parent}>
            <Todays todaysData={todaysData} setShowLastData={setShowLastData} />
            <LastDays showLastDays={showLastDays} lastDaysInfo={lastDaysInfo} />
        </div>
    )
}

export default Currencies;