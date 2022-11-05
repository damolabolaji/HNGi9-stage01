import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'

import Home from './Home';

const name = 'Damola Bolaji';



const Contact = () => {



    const initialValues = { firstname: '', lastname: '', email: '', message: '' }
    const [formValues, setformValues] = useState(initialValues);
    const [formErrors, setformErrors] = useState({});
    const [isSubmit, setisSubmit] = useState(false);
    const [change, setChange] = useState(true)
   
    const buttonChange = (e) => {
      setChange(!change)
    }
 

     const handleChange = (e) => {
     
      const { name, value} = e.target;
      setformValues({...formValues, [name]: value});
      console.log(formValues);
  

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setformErrors(validate(formValues) );
        setisSubmit(true);


    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
          
        }
      }, [formErrors]);

    const validate = (values) => {

        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;


        if (!values.firstname) {
            errors.firstname = "Firstname is required. Field cannot be empty";
            
           
        }
        if (!values.lastname) {
            errors.lastname = "Lastname is required. Field cannot be empty";
        }


        if (!values.email) {
            errors.email = "Email is required. Field cannot be empty";
        } else if (!regex.test(values.email)) {
            errors.email = "This is not a valid email format";
        }
        if (!values.message) {
            errors.message = "Please enter a message";
        } 

        return errors;
        }

    return ( 
        

        <div className="contactForm">

        <Routes>
            <Route path='/home' element= {<Home/>} />
           
        </Routes>

            <Link to="/"><button className='back-button'><span> &larr;</span> Home </button></Link>
           

            {/* <div className="container">
                {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="form-success">Signed in successfully</div>) : null } 
            </div> */}

        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form id="my-form" onSubmit={handleSubmit}>

          <div id="name">

            <div>
                <label for="first_name">First name</label>
                <input type="text" name='firstname' className={(formErrors.firstname) ? "error-two" :""} id="first_name" placeholder="Enter your first name" value={ formValues.firstname } onChange= {handleChange}/>
                <small className="err-msg">{formErrors.firstname}</small>
            </div>

            <div>
                <label for="last_name">Last name</label>
                <input type="text" name='lastname'   className={(formErrors.lastname) ? "error-two" :""} id="last_name" placeholder="Enter your last name" value={ formValues.lastname } onChange= {handleChange}/>
                <small className="err-msg">{formErrors.lastname}</small>
            </div>

        </div>
       
      
        <div className="flex-col-full">
          <label for="email">Email</label>
          <input type="text" name='email' className={(formErrors.email) ? "error-two" :""} id="email" placeholder="yourname@email.com" value={ formValues.email } onChange= {handleChange} />
          <small className="err-msg">{formErrors.email}</small>
        </div>

        <div className="flex-col-full">
          <label for="message">Message</label>
          <textarea type="text" name='message' className={(formErrors.message) ? "error" :""} id="message" placeholder="Send me a message and I'll reply you as soon as possible..." value={ formValues.message } onChange= {handleChange}/>
          <small className="err-msg">{formErrors.message}</small>
        </div>

        <div>
            
          <label for="checkbox" className="chk-container">You agree to providing your data to {name} who may contact you.
            <input type="checkbox" id="checkbox" onChange={buttonChange}/>
            <span className="chkbox"></span>
                     
          </label>
        </div>
 
        <button id="btn__submit" disabled={change} >Send message</button>

      </form>

        </div>

     );
}
 
export default Contact;