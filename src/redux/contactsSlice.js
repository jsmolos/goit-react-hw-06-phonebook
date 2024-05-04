import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialContactsState = [
  { id: 'id-1', name: 'Rosie Manzano', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Klide', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Cheese', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Steele', number: '227-91-26' },
];

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContactsState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});


export const { addContact, deleteContact } = contactsSlice.actions;