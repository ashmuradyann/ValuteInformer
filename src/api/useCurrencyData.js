import {useState, useEffect} from 'react';
import axios from 'axios';

import errMsg from './errMsg.js';

function useCurrencyData(value){

    const [todays, setTodays] = useState('');
    const [lastDays, setLastDays] = useState('');

    useEffect(() => {
        axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
                .then(results => {
                    setTodays(results.data.Valute)
                    console.log(results.data.Valute)
                })
                .catch(err => {
                    console.log(err)
                })
    }, [])

    useEffect(() => {

        let data = []

        for(let i = 0; i < 10; i++){
            axios.get(`https://www.cbr-xml-daily.ru/archive/${value[i]}/daily_json.js`)
                .then(results => {
                    data.push(results.data)
                })
                .catch(err => {
                    console.log(err)
                    data.push({Date: value[i].replaceAll("/", "-") + "T11:30:00+03:00",
                               Valute: errMsg
                    })
                })
        }

        setLastDays(data)

    }, [value]);

    return [todays, lastDays];

}

export default useCurrencyData;