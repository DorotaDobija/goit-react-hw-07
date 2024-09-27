import { useSelector} from "react-redux";
import { Contact } from "../Contact/Contact";
import css from './ContactList.module.css'
import { selectContacts, selectFilters } from "../../redux/selectors";


export const ContactList = () => {

const contacts = useSelector(selectContacts);
const searchContact = useSelector(selectFilters);

const contactToRender = contacts.filter((contact) => contact.name.toLowerCase().includes(searchContact.name.toLowerCase()));

    return (
        <ul className={css.contact_list}>
{contactToRender.map((contact) => {
    return <li key={contact.id}>
<Contact name={contact.name} phone={contact.phone} id={contact.id}/>
</li>
})}
     </ul>
    )
}