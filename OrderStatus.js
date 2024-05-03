//import use state,react packages
import { useState } from "react";
import React from "react";
// Define the `OrderStatus` functional component with order state details
function OrderStatus(){
    const [order, setOrder] = useState({
        id: 'ORD123',
        status: 'Processing',
        customer: 'John Doe',
        items: 3
        });
        //handleStatusChange function to updates the `order` state's `status` property based on the selected dropdown value
        function handleStatusChange(){
                     
           console.log(document.querySelector('#id1').value);
            order.status= document.querySelector('#id1').value;
            setOrder({...order,status:order.status});
            console.log(order);
    
        }
        return (
            // Render the current order details 
            <div >
             <h1 > Order Details  </h1>
             <h3>Customer:{order.customer} </h3>
             <h3>Order Id: {order.id}</h3>
            <h3>Status: {order.status}</h3>  
            <h3>Items:{order.items}</h3>
        {/* add dropdown element that allows the user to update the order status    */}
        <select   id="id1"   >
       <option value="Processing">Processing</option>
        <option value="Shipped">Shipped</option>
        <option value="Delivered">Delivered</option>
         </select>
         <button onClick={handleStatusChange} >Update Status </button>
            </div>
        
         );
        }
        export default OrderStatus;