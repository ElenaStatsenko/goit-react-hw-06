import { createSlice } from "@reduxjs/toolkit";


const filtersInitialState = {
    filter: ""
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { changeFilter} = filtersSlice.actions;
// редюсер фильтру
export const filtersReducer = filtersSlice.reducer;
// функция-селектор
export const selectNameFilter  = (state) => state.filters.filter;



// const searchContact = contacts.filter((contact) =>
// contact.name.toLowerCase().includes(filter.toLowerCase())

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     if (!filter) return contacts;
//     return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase())
//     );
//   }
