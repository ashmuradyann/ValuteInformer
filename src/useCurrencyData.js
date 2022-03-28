import {useState, useEffect} from 'react';
import axios from 'axios';

function useCurrencyData(value){

    const [todays, setTodays] = useState('');
    const [lastDays, setLastDays] = useState('');

    useEffect(() => {
        axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
                .then(results => {
                    setTodays(results.data.Valute)
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
                               Valute: {
                                "AUD": {Value: "Отсутствует"},
                                "AZN": {Value: "Отсутствует"},
                                "GBP": {Value: "Отсутствует"},
                                "AMD": {Value: "Отсутствует"},
                                "BYN": {Value: "Отсутствует"},
                                "BGN": {Value: "Отсутствует"},
                                "BRL": {Value: "Отсутствует"},
                                "HUF": {Value: "Отсутствует"},
                                "HKD": {Value: "Отсутствует"},
                                "DKK": {Value: "Отсутствует"},
                                "USD": {Value: "Отсутствует"},
                                "EUR": {Value: "Отсутствует"},
                                "INR": {Value: "Отсутствует"},
                                "KZT": {Value: "Отсутствует"},
                                "CAD": {Value: "Отсутствует"},
                                "KGS": {Value: "Отсутствует"},
                                "CNY": {Value: "Отсутствует"},
                                "MDL": {Value: "Отсутствует"},
                                "NOK": {Value: "Отсутствует"},
                                "PLN": {Value: "Отсутствует"},
                                "RON": {Value: "Отсутствует"},
                                "XDR": {Value: "Отсутствует"},
                                "SGD": {Value: "Отсутствует"},
                                "TJS": {Value: "Отсутствует"},
                                "TRY": {Value: "Отсутствует"},
                                "TMT": {Value: "Отсутствует"},
                                "UZS": {Value: "Отсутствует"},
                                "UAH": {Value: "Отсутствует"},
                                "CZK": {Value: "Отсутствует"},
                                "SEK": {Value: "Отсутствует"},
                                "CHF": {Value: "Отсутствует"},
                                "ZAR": {Value: "Отсутствует"},
                                "KRW": {Value: "Отсутствует"},
                                "JPY": {Value: "Отсутствует"}
                            }
                    })
                })
        }

        console.log(data)

        setLastDays(data)

    }, [value]);

    return [todays, lastDays];

}

export default useCurrencyData;