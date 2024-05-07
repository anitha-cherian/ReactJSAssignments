import { useState } from "react";
import React from "react";
import styles from "./Mobiles.module.css";
function MobileList(){
    let [mobilearray,setMobilearray]=useState([
        {id:1,name:"Motorola",description:"accessories phone",price:10000,rating:3.6,instock:true},
        {id:2,name:"Lenovo",description:"tablet phone",price:20000,rating:3.9,instock:true},
        {id:3,name:"samsung",description:"gaming phone",price:30000,rating:4.2,instock:false},
        {id:4,name:"vivo",description:"photo phone",price:15000,rating:4.0,instock:true}

]);
return (<div>
    <table className={styles.table}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Instock</th>
            </tr>
        </thead>
        <tbody>
            {
                mobilearray.map(mobile => (
                    <tr key={mobile.id}>
                        <td>{mobile.id}</td>
                        <td>{mobile.name}</td>
                        <td>{mobile.description}</td>
                        <td>{mobile.price}</td>
                        <td>{mobile.rating}</td>
                        <td>{mobile.instock}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
</div>
)
    

}
export default MobileList;