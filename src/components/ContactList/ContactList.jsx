import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Contact from "../Contact/Contact";
import { getContacts } from "../../redax/contactsSlice";
import { deleteContact } from "../../redax/contactsSlice";
import { selectFilteredContacts } from "../../redax/contactsSlice";
import { selectNameFilter } from "../../redax/filtersSlice";

export default function ContactList() {
  const dispatch = useDispatch();
  
  // Получаем фильтр
  const filter = useSelector(selectNameFilter);
  
  // Получаем все контакты
  const contacts = useSelector(getContacts);
  
  // Получаем отфильтрованные контакты
  const filteredContacts = useSelector(selectFilteredContacts);

  // Определяем, какие контакты отображать
  const contactsToDisplay = filter ? filteredContacts : contacts.items;

  return (
    <div>
      <ul>
        {contactsToDisplay.map((contact) => (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
            <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
