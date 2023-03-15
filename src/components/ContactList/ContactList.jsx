import { useDispatch, useSelector } from "react-redux";
import { getContacts, getFilter } from "redux/selectors";
import { deleteContact } from "redux/contactsSlice";
import { Contact, ContactInfo, DeleteButton } from "./ContactList.styled";

const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const deleteContactById = (contactId) => {
        dispatch(deleteContact(contactId));
  };
    
    const getFilteredContacts = () => {
        const normalisedFilter = filter.toLowerCase();
        return contacts.filter(({ name }) => name.toLowerCase().includes(normalisedFilter));
    };
    
    const filteredContacts = getFilteredContacts();
    
    return (
        <ul>{filteredContacts.map(({ id, name, number }) => (
            <Contact key={id}>
                <ContactInfo>{name}: {number}</ContactInfo>
                <DeleteButton onClick={() => { deleteContactById(id) }}>Delete</DeleteButton>
            </Contact>))}
        </ul>
    )
}

export default ContactList;