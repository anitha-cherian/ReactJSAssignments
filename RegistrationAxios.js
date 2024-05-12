import { useState,useEffect } from "react"; 
import styles from "./Registration.module.css";
import axios from "axios";
 
 
function RegistrationAxios() {
    const [user,setUser] = useState({
        name: '',
        password:'',
        email: '',
        phone: '',
            })
 
        
    // define state to maintain the error messages
 
    // define state to maintain the error messages
    const [errors, setErrors] = useState({
        name: '',
        password:'',
        email: '',
        phone: '',
    });
 
 
 
    // define useEffect for the email to validate check email can be considered or not
 
    function handleNameChange(e) {
        setUser({
            ...user,
            name: e.target.value
        });
        // email
    }
    function handlePasswordChange(e) {
        setUser({
            ...user,
            password: e.target.value
        });
        // email
    }
 
 
    function handleEmailChange(e) {
        setUser({
            ...user,
            email: e.target.value
        });
        // verify this email is valida or not
    }
 
    function handlePhoneChange(e) {
 
        setUser({
            ...user,
            phone: e.target.value
        });
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(user);
        //reset the error state.
 
        setErrors({
            name: '',
            password:'',
            email: '',
            phone: '',
        });
 
        // validate the user object
        // if the name field is empty   set the error message name is required
 
        if (user.name === '') {
            // set error message name is required with prevState
 
           setErrors((prevState) => ({
             ...prevState,
             name: 'Name is required',
           }));
        }
            //if username is less than 3 chars 
         if (user.name.length<3) {
                // set error message name is required with prevState
     
               setErrors((prevState) => ({
                 ...prevState,
                 name: 'Name is Inavlid',
               }));
            //setErrors with oiut previsopstate
             
        }
        if (user.password === '') {
            // set error message name is required with prevState
 
           setErrors((prevState) => ({
             ...prevState,
             password: 'Password is required',
           }));
        }
        //validation to set password min 8 characters
        if(user.password !== ""){
            if(user.password.length < 8){
                setErrors((prevState) => ({
                    ...prevState,
                    password:"Password should be atleast 8 characters",
                  }));
            }
        }
        //Validation to verify atleast one special charater is present in password
        if(user.password.length < 8){
            setErrors((prevState) => ({
                ...prevState,
                password:"Password should contain atleast one special character"
            }));
        }
    
        // if the email field is empty   set the error message email is required
 
        if (user.email === '') {
            // set error message email is required with prevState
 
            setErrors((prevState) => ({
                ...prevState,
                email: 'Email is required',
            }));
        }
 //checking if it is a valid email format
            if(user.email !== ""){
                if(!user.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
                    setErrors((prevState) => ({
                        ...prevState,
                        email:"Email is not valid"
                    }));
                }
            }
        
        // if the phone field is empty   set the error message phone is required
        if(user.phone === ''){
            setErrors((prevState) => ({
                ...prevState,
                phone: 'Phone is required',
            }));
 
        }

        //validation to verify if phone number is 10 digit
        if(user.phone !== ""){
            if(user.phone.length !== 10){
                setErrors((prevState) => ({
                    ...prevState,
                    phone:"Phone is not valid"
                }));
            }
        }
 //once teh validation completes,  Use Axios to send a POST request
        axios.post('http://localhost:5000/api/users',user)
        .then(response=>{
            console.log(response.data);

        })
        .catch(error=>{
            console.log(error);
        })

    }
    
        return (
            <form  className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
                <label htmlFor="name" className={styles.label}>Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className={styles.input}
                    value={user.name}
                    onChange={handleNameChange}
                   
                />
                {/* if errors contains name as error display it here */}
                {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="password" className={styles.label}>Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    className={styles.input}
                    value={user.password}
                    onChange={handlePasswordChange}
                   
                />
                {/* if errors contains name as error display it here */}
                {errors.password && <span className={styles.error}>{errors.password}</span>}
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="email" className={styles.label}>Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className={styles.input}
                    value={user.email}
                    onChange={handleEmailChange }
                   
                />
                {/* if errors contains email as error display it here */}
                {errors.email && <span className={styles.error}>{errors.email}</span>}
     
            </div>
            <div className={styles.inputGroup}>
                <label htmlFor="phone" className={styles.label}>Phone:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className={styles.input}
                    value={user.phone}
                   
                    onChange={handlePhoneChange}
                   
                />
                {/* if errors contains phone as error display it here */}
                {errors.phone && <span className={styles.error}>{errors.phone}</span>}
     
            </div>
            <button type="submit" className={styles.submitButton}>Register</button>
                    
           </form>
        );
     
    }
     
 
       

 
    export default RegistrationAxios;
 