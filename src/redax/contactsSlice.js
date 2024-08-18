import { createSlice } from "@reduxjs/toolkit";

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: "contacts",
  // Початковий стан редюсера слайсу
  contacts: {
    items: [],
  },
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
        state.push(action.payload);
    },
    deleteContatc(state, action) {
        const index = state.findIndex(task => task.id === action.payload);
    },
  },
});

// Генератори екшенів
const { addContact, deleteContatc } = contactsSlice.actions;

// Редюсер слайсу
const contactsReducer = contactsSlice.reducer;
