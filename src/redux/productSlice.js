import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk('(productList)/fetchProducts', async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products')
    // console.log(data);
    return data
})

const productSlice = createSlice({
    name: "productList",
    initialState: {
        loading: false,
        allProducts: [],
        searchProduct: [],
        filterData: [],
        error: ''
    },
    reducers: {
        //action for product search
        searchData: (state, action) => {
            state.allProducts = state.searchProduct.filter(product => product.title.toLowerCase().trim()
                .includes(action.payload.toLowerCase().trim()))

        },
        //action for filter product
        filterItem: (state, action) => {
            state.allProducts = state.filterData.filter(item => item.category == action.payload)
        }
    },

    extraReducers: (builder) => {

        builder.addCase(fetchProducts.pending, (state) => {
            state.loading = true
        })

        //action for fulfilled
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.allProducts = action.payload
            state.searchProduct = action.payload
            state.filterData = action.payload
            state.singleProduct=action.payload
            state.loading = false
            state.error = ""
        })

        //action for rejected
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.error = action.payload
            state.allProducts = []
            state.loading = false
        })

    }
})


export default productSlice.reducer
export const { searchData, filterItem} = productSlice.actions