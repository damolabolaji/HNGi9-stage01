

const Contact = () => {
    return ( 
        

        <div className="contactForm">

        <h1>Contact Me</h1>
        <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form id="my-form">

       

        {/* <div id="msg"></div> */}
        <div id="name">

            <div>
                <label for="first_name">First name</label>
                <input type="text" id="first_name" placeholder="Enter your first name"/>
            </div>

            <div>
                <label for="last_name">Last name</label>
                <input type="text" id="last_name" placeholder="Enter your last name"/>
            </div>

        </div>
       
      
        <div className="flex-col-full">
          <label for="email">Email</label>
          <input type="text" id="email" placeholder="yourname@email.com"/>
        </div>

        <div className="flex-col-full">
          <label for="message">Message</label>
          <textarea type="text" id="message" name="message-body" placeholder="Send me a message and I'll reply you as soon as possible..."/>
        </div>

        <div>
            <input type="checkbox" id="checkbox" value="Submit"/>
            {/* <span className="chkbox">ujkijhg</span> */}
            <label for="checkbox">You agree to providing your data to (name) who may contact you.</label>
        </div>
 
        <button id="btn__submit">Send message</button>

      </form>

        </div>

     );
}
 
export default Contact;