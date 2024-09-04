import "./Contact.scss";
import { contacts } from "../data";
import { ContactDetails } from "./ContactDetails";

export default function Contact() {
  const contactDetails = contacts.map((contact) => {
    const id = contacts.indexOf(contact);
    const { imageUrl, imageName, name } = contact;

    return <ContactDetails key={id} imageName={imageName} url={imageUrl} name={name} />;
  });

  return (
    <div className="contact-details">
      <h2>Contact</h2>
      <p>You can contact me through the following details: </p>
      {contactDetails}
    </div>
  );
}
