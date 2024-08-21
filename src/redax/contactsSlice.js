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
      console.log(action);
      state.items.push(action.payload);
    },
  },

  deleteContact(state, action) {
    // 1. Найти индекс контакта, который нужно удалить
    const index = state.items.findIndex(
      (contact) => contact.id === action.payload
    );

    // 2. Проверить, был ли найден такой контакт
    if (index !== -1) {
      // 3. Если найден, удалить его из массива
      state.items.splice(index, 1);
    }
  },
});

// Генераторы экшенов
export const { addContact, deleteContact } = contactsSlice.actions;

// Редюсер слайса
export const contactsReducer = contactsSlice.reducer;

// функция-селектор
export const getContacts = (state) => state.contacts;

console.log(contactsSlice);
