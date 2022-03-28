import { useState } from 'react';

import date from './date.js';
import useCurrencyData from './useCurrencyData';

import LastDays from './LastDays.js';
import Todays from './Todays.js';

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
            return (el.Date).slice(0, 10).replaceAll("-", ".")
        });    

        let values = lastDaysData.map(el => {
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
            <div>
                <Todays todaysData={todaysData} setShowLastData={setShowLastData} />
            </div>
            <LastDays showLastDays={showLastDays} lastDaysInfo={lastDaysInfo} />
        </div>
    )
}

export default Currencies;