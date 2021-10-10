// import {} from 'react'
import {StyledContactForm} from './styled'

const ContactForm = () => {

const contactFormHandler = (e)=>{
    e.preventDefault()
    console.log('sent!')
}

    return (
        <>
        <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?</div>
        <StyledContactForm onSubmit={contactFormHandler}>
            <label>Your Name</label>
            <input></input>
            <label>Your email address</label>
            <input></input>
             <label>Your message</label>
             <input type="text-area"></input>
             <button>Send</button>
        </StyledContactForm>
        </>
        );
}
 
export default ContactForm