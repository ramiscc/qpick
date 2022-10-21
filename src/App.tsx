import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import ContactsPage from "./pages/contacts/ContactsPage"
import ServiceConditionPage from "./pages/service-condition/ServiceConditionPage"
import FavouritesPage from "./pages/favourites/FavouritesPage"
import Layout from "./components/layout/Layout"
import CartPage from "./pages/cart/CartPage"
import NotFoundPage from "./pages/not-found/NotFoundPage"
import ProductPage from "./pages/product/ProductPage"
import {useAppSelector} from "./hooks/redux";

export default function App() {

    const {isAuth} = useAppSelector(s => s.firebase)

    return (
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path={'/contacts'} element={<ContactsPage/>}/>
                <Route path={'/service-condition'} element={<ServiceConditionPage/>}/>
                {isAuth && <Route path={'/favourites'} element={<FavouritesPage/>}/>}
                {isAuth && <Route path={'/cart'} element={<CartPage/>}/>}
                <Route path={'/:type/:id'} element={<ProductPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    )
}