import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { getContacts } from "../../redax/contactsSlice";
import { deleteContact } from "../../redax/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(getContacts);


  
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contacts.items.id));
  return (
    <div>
      <ul>
        {contacts.items.map((contact) => (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />

            <button onClick={handleDelete}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
