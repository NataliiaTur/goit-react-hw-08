import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6811dd243ac96f7119a5e10b.mockapi.io";

// запит до сервера, отримуємо дані та повертає. тепер треба, аби слайс ці данні підхопив
export const fetchDataThunk = createAsyncThunk(
  "fetchContacts",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Видалення з бази на бекенді. На сервер відпр.інфо з ід для видалення
export const deleteContactThunk = createAsyncThunk(
  "deleteContact",
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Додавання контакту
export const addContactThunk = createAsyncThunk(
  "addContact",
  async (body, thunkAPI) => {
    try {
      const response = await axios.post("/contacts", body);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
