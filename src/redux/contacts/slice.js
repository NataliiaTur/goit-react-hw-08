import { createSelector, createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  addContactThunk,
  deleteContactThunk,
  fetchDataThunk,
} from "../contacts/operations";
import { selectNameFilter } from "../filters/selectors";
import { logoutThunk } from "../auth/operations";

// 1 Початкові рамки, в яких працює слайс.
const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

// 2 Викликаємо createSlice функцію, яку треба налаштувати. Поверне {} з екшенами
// та редьюсером
const slice = createSlice({
  // 3. ім'я слайсу
  name: "contacts",

  // 4 передаємо початковий стан (описуємо тут)
  initialState,

  extraReducers: (builder) => {
    // перехоплює отримані data від fetchDataThunk. в payload value від data
    builder
      .addCase(fetchDataThunk.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      // видалення
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload);
      })

      //  видалення стану після логауту
      .addCase(logoutThunk.fulfilled, () => initialState)

      // додавання
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      //  all rejecteds
      .addMatcher(
        isAnyOf(
          fetchDataThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state, action) => {
          state.error = action.payload;
        }
      )
      // on pending (error, isLoading)
      .addMatcher(
        isAnyOf(
          fetchDataThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        (state, action) => {
          state.error = null;
          state.isLoading = true;
        }
      )

      // on fulfilled (isLoading)
      .addMatcher(
        isAnyOf(
          fetchDataThunk.fulfilled,
          addContactThunk.fulfilled,
          deleteContactThunk.fulfilled
        ),
        (state, action) => {
          state.isLoading = false;
        }
      );
  },
});

// 6.Експортуємо всі екшени (функції з редьюсера) до зовншінього світу
export const {
  addContact,
  deleteContact,
  dataFulfilledOperation,
  setLoading,
  setError,
} = slice.actions;

// 7 .Повертаємо для стору редьюсер зі слайсу
const contactsReducer = slice.reducer;
export default contactsReducer;
