import { createSlice, nanoid } from "@reduxjs/toolkit";

const contactsInitialState = JSON.parse(localStorage.getItem('contacts')) ?? [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                const isExist = state.find(({ name }) => name.toLowerCase() === action.payload.name.toLowerCase());
                if (isExist) {
                    alert(`${action.payload.name} is already in contacts.`);
                    return state;
                };
                localStorage.setItem('contacts', JSON.stringify([...state, action.payload]))
                return [...state, action.payload];
            },
            prepare(contact) {
                return {
                    payload: {
                        id: nanoid(),
                        name: contact.name,
                        number: contact.number
                    },
                };
            },
        },
        deleteContact(state, action) {
            localStorage.setItem('contacts', JSON.stringify(state.filter(contact => contact.id !== action.payload)));
            return state.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;