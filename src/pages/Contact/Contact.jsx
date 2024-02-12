import './Contact.scss'
import { contacts } from '../data' 

export default function Contact() {
    const details = contacts.map((contact) => {
        return (
            <Details key={contact.id}
                url={contact.imageUrl}
                name={contact.name}/>
        )
    })

    return (
        <div className='contact-details'>
            <h2>Contact</h2>
            <p>You can contact me through the following details: </p>
            {details}
        </div>
    )
}

function Details(props) {
    return (
        <div className='details'>
            <img src={props.url}/>
            <p>{props.name}</p>
        </div>
    )
}