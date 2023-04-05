import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../url/base_url";

const initialState = {
  carts: [],
  products: [],
  loading: true,
};

// Fetch all products:
export const fetchAllProducts = createAsyncThunk(
  "products/fetchAllProducts",
  async () => {
    const res = await axios.get(`${BASE_URL}/products`);
    return res.data;
  }
);

// Fetch single product:
export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (id) => {
    const res = await axios.get(`${BASE_URL}/products/${id}`);
    return res.data;
  }
);

//fetch by category:

export const fetchByCategory = createAsyncThunk(
  "products/fetchByCategory",
  async (category) => {
    const res = await axios.get(`${BASE_URL}/products/category/${category}`);
    return { products: res.data };
  }
);

//search products:
export const searchProducts = createAsyncThunk(
  "products/searchProducts",
  async (query) => {
    try {
      const res = await axios.get(`${BASE_URL}/products`);
      const data = res.data;
      return data.filter(
        (product) =>
          product.title.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
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
    },

    RemoveCart: (state, action) => {
      const remainItem = state.carts.filter((item) => {
        return item.id != action.payload;
      });
      state.carts = remainItem;
    },
  },
  extraReducers: {
    [fetchAllProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchSingleProduct.fulfilled]: (state, action) => {
      state.products = [action.payload];
      state.loading = false;
    },
    [searchProducts.fulfilled]: (state, action) => {
      state.products = action.payload;
      state.loading = false;
    },
    [fetchByCategory.fulfilled]: (state, action) => {
      state.products = action.payload.products;
      state.loading = false;
    },
  },
});

export const { AddToCart, RemoveCart } = productSlice.actions;
export default productSlice.reducer;
