import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  products: [],
  loading: true,
  selectedGenre: null,
};

// Fetch all products:
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
  }
);

// Fetch single product:
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
  }
);

//search products:
export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (query) => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      const data = res.data;
      return data.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
    } catch (error) {
      console.error(error);
    }
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    AddToCart: (state, action) => {
      const cartItem = state.products.find((item) => {
        return item.id === action.payload;
      });
      state.carts = [...state.carts, cartItem];

      // Store cart items in local storage
      // localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },

    RemoveCart: (state, action) => {
      const remainItem = state.carts.filter((item) => {
        return item.id != action.payload;
      });
      state.carts = remainItem;

      // Store cart items in local storage
      // localStorage.setItem("cartItems", JSON.stringify(state.carts));
    },
  },
  extraReducers: {
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = [action.payload];
    },
    [searchProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.products = action.payload;
    },
  },
});

export const { AddToCart, RemoveCart } = productSlice.actions;
export default productSlice.reducer;
