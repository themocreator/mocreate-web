import { useState } from "react";

const ContactForm = (props) => {
    const [enteredName, setEnteredName] = useState("");
    const [enteredAddress, setEnteredAddress] = useState("");
    const [enteredSubject, setEnteredSubject] = useState("");
    const [enteredMessage, setEnteredMessage] = useState("");

    const submitHandler = (event) => {
        console.log("Thank you for messaging us!");
        event.preventDefault(); 

        //reset form
        setEnteredName("");
        setEnteredAddress("");
        setEnteredSubject("");
        setEnteredMessage("");
    }

    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const addressChangeHandler = (event) => {
        setEnteredAddress(event.target.value);
    }

    const subjectChangeHandler = (event) => {
        setEnteredSubject(event.target.value);
    }

    const messageChangeHandler = (event) => {
        setEnteredMessage(event.target.value);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Name</label>
                <input 
                    type="text"
                    value={enteredName}
                    onChange={nameChangeHandler}
                />
                  <label>Email Address</label>
                <input 
                    type="text"
                    value={enteredAddress}
                    onChange={addressChangeHandler}
                />
                  <label>Subject</label>
                <input 
                    type="text"
                    value={enteredSubject}
                    onChange={subjectChangeHandler}
                />
                  <label>Message</label>
                <input 
                    type="text"
                    value={enteredMessage}
                    onChange={messageChangeHandler}
                />
                <button type="submit">Send</button>
                
            </form>
        </div>
    );

}

export default ContactForm; 