import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  initialState: {
    items: [],
  },
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      
      state.items.push(action.payload);
    },
  

    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  }});

// Генераторы экшенов
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;

// функция-селектор
export const getContacts = (state) => {
  // console.log(state.contacts.items)
  return state.contacts.items};



// export const selectFilteredContacts = (state) => {
//   const filter = state.filters.filter.toLowerCase();
//   return state.contacts.items.filter(contact =>
//     contact.name.toLowerCase().includes(filter)
//   );
// };


