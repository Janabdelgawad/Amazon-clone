import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchproducts = createAsyncThunk(
  "productsSlice/fetchproducts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3040/products");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const productsSlice = createSlice({
  initialState: [],
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchproducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { fetchposts } = productsSlice.actions;
export default productsSlice.reducer;
