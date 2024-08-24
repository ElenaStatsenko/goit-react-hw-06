import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { getContacts } from "../../redax/contactsSlice";
import { deleteContact } from "../../redax/contactsSlice";

export default function ContactList() {
  const contacts = useSelector(getContacts);
console.log(contacts)
  const dispatch = useDispatch();
  


    <div>
      <ul>
        {contacts.items.map((contact) => (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />

            <button onClick={() => dispatch(deleteContact(contact.id))}> Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
