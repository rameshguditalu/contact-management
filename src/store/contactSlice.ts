import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface Contact {
  id: string;
  fullName: string;
  lastName: string;
  status: boolean;
}

interface ContactState {
  contacts: Contact[];
}

const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<string>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex(
        (contact) => contact.id === action.payload.id
      );
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    toggleStatus: (state, action: PayloadAction<string>) => {
      const contact = state.contacts.find(
        (contact) => contact.id === action.payload
      );
      if (contact) {
        contact.status = !contact.status;
      }
    },
  },
});

export const { addContact, deleteContact, editContact, toggleStatus } =
  contactSlice.actions;
export const selectContact = (state: RootState) => state.contacts.contacts;

export default contactSlice.reducer;
