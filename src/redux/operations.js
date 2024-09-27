import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


axios.defaults.baseURL = "https://66f54b6a9aa4891f2a24a707.mockapi.io"

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async(_, thunkAPI) => {
try {
    const response = await axios.get("/contacts");
    console.log(response.data)
    return response.data;
} catch (error) {
    return thunkAPI.rejectWithValue(error.message)
}})


export const addContact = createAsyncThunk('contacts/addContact', async(data, thunkAPI) => {
    try {
        const response = await axios.post("/contacts", {
            name: data.name,
            phone: data.phone,
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }})

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }})

