import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import date from './date.js';
import useCurrencyData from './useCurrencyData';

import styles from './styles.module.css';

function Currencies(){

    let gotData = useCurrencyData(date)

    console.log(gotData[0])

    // let currentData = gotData[0][gotData[0].length - 1] //gotData[0].length - 1

    // let dates = gotData[1].map(el => {
    //     return el;
    // })

    // let lastDaysData = gotData[0].map(el => {
    //     return el[1].map(el => {
    //         return el.Value
    //     })
    // })

    // console.log(currentData)

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
            {(gotData[0][gotData[0].length - 1]).map((el, i) => {
                return (
                    <div>
                        {el.Name}
                    {/* <Tooltip 
                        inertia="true" 
                        followCursor="true" 
                        hideOnClick="false" 
                        animation="shift" 
                        html={
                            <div>{el[1].CharCode}</div>
                        }>
                            <div key={i} className={styles.infoDiv} >
                                <li>{el.Name}</li>
                                <ul>
                                    <li>{(el.Value).toFixed(2)}</li>
                                    <li>{(((el.Value - el.Previous) / el.Previous) * 100).toFixed(2)}</li>
                                </ul>
                            </div>
                    </Tooltip> */}
                    </div>
                )
            })}
        </div>
    )
}

export default Currencies;