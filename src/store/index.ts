import {configureStore} from "@reduxjs/toolkit"
import FirebaseSlice from "./firebase/firebase.slice";
import ProductSlice from "./product/product.slice";

export const store = configureStore({
    reducer: {
        firebase: FirebaseSlice,
        product: ProductSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch