import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

import styles from './styles.module.css';

function Todays({ todaysData, setShowLastData }){

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
                    </div>
                )
            })}
        </div>
    )

}

export default Todays;