import {useState, useEffect} from 'react';
import axios from 'axios';

function useCurrencyData(value){

    const [resultData, setResultData] = useState([]);

    useEffect(() => {

        let data = [];
        let dates = [];

        for(let i = 0; i < 10; i++){
            axios.get(`https://www.cbr-xml-daily.ru/archive/${value[i]}/daily_json.js`)
                .then(results => {
                    data.push(results.data.Valute)
                    dates.push(results.data.Date)
                    // data.push(Object.values(Object.entries(results.data.Valute)))
                    // dates.push(results.data.Date)
                })
                .catch(err => {
                    console.log(err)
                })
        }

        setResultData([data, dates])
            
    }, []);

    return resultData;
}

export default useCurrencyData;