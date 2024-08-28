import { createSlice } from "@reduxjs/toolkit";

const filtersInitialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    changeFilter(state, action) {
<<<<<<< Updated upstream
      state.filter = action.payload;
=======
      console.log(state.filters);
      state.name = action.payload;
    
>>>>>>> Stashed changes
    },
  },
});

// Експортуємо генератори екшенів та редюсер
<<<<<<< Updated upstream
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
=======
export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// функция-селектор

export const selectNameFilter = (state) => state.filters.name;
>>>>>>> Stashed changes
