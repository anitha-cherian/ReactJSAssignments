import React from 'react';
import styles from './Weather.module.css';
function WeatherCard(props){
    const{index,day,condition,temperature}=props;
    return (
        <div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Day</th>
                        <th>Condition</th>
                        <th>Temperature</th>
                    </tr>
                </thead>
                <tbody>
                       <tr key={index}>
                                <td>{day}</td>
                                <td>{condition}</td>
                                <td>{temperature}</td>
                            </tr>
                        
                    
                </tbody>
            </table>
        </div>
    )
}

export default WeatherCard;