import { configureStore } from "@reduxjs/toolkit";

<<<<<<< Updated upstream
import { contactsReducer } from "./contactsSlice";
=======
import { contactsReducer} from "./contactsSlice";
>>>>>>> Stashed changes
import { filtersReducer } from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
