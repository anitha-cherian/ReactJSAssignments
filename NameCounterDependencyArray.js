import React, { useState, useEffect } from 'react';
import styles from "./NameCounter.module.css";
   //define a component with two state varaibles name and counter and initialize te variable
function NameCounterDependencyArray() {
    const [name, setName] = useState('');
    const [counter, setCounter] = useState(0);
   //Function to  increment the counter and apened 'a' to Name using setCounter and setName
    function handleNameCounter(){
        setCounter(counter+1);
        setName(name+"a");
            
     console.log(counter);
 
    }
    
  
    useEffect(() => {
      console.log('Counter state changed:', counter);
      console.log('Name state changed:', name);
    });
  
    return (
      <div>
        <h1>Name and Counter</h1>
            <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.label}>Name:</label>
            <input
                type="text"
                id="id1"
                name="username"
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
               
            />
            
        </div>
        <div>
          <h2>Counter: {counter}</h2>
          <button onClick={handleNameCounter}>Increment Counter</button>
        </div>
      </div>
    );
  }
export default NameCounterDependencyArray;