import { configureStore } from "@reduxjs/toolkit";
import categoriaSlice from "./reducers/categorias";


const store = configureStore({
    reducer: {
        categorias: categoriaSlice
    }
});

export default store;