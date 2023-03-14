import React from "react";
import { Contact, ContactInfo, DeleteButton } from "./ContactList.styled";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/actions";

const ContactList = () => {
    const contacts = useSelector(state => state.contacts);
    const filter = useSelector(state => state.filter);
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
            <DeleteButton onClick={() => {deleteContactById(id)}}>Delete</DeleteButton>
        </Contact>))}
    </ul>
    )
}

export default ContactList;