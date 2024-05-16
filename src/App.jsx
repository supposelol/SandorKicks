import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { Navbar } from "./components/Header/Navbar";
import OrderSummary from "./components/Cart/OrderSummary";
import Nomatch from "./components/NoMatch";
import Shoes from "./components/Shoes";
import NikeProducts from "./components/Products/NikeProducts";
import AdidasProducts from "./components/Products/AdidasProducts";
import NewBalanceProducts from "./components/Products/NewBalanceProducts";
import Users from "./components/Profile/Users";
import UserDetails from "./components/Profile/UserDetails";
import { Profile } from "./components/Profile/Profile";
import { AuthProvider } from "./components/Profile/auth";
import { Login } from "./components/Profile/Login";
import { RequireAuth } from "./components/Profile/RequireAuth";
import Cart from "./components/Cart/Cart";
import ShoeDetails from "./components/Products/ShoeDetails";
import AccessoryDetails from "./components/Products/AccessoryDetails";
import Accessories from "./components/Accessories";
import { CartProvider } from "./components/Cart/CartContext";
// const LazyAbout = React.lazy(() => import("./pages/Accessories"));

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shoes" element={<Shoes />}>
            <Route path="adidas" element={<AdidasProducts />} />
            <Route path="nike" element={<NikeProducts />} />
            <Route path="newbalance" element={<NewBalanceProducts />} />
          </Route>
          <Route path="/shoes/:brand/:route" element={<ShoeDetails />} />
          {/* <Route path="accessories" element={
          <React.Suspense fallback='Loading. . .'>
            <LazyAbout />
          </React.Suspense>}
        /> */}
          <Route path="accessories" element={<Accessories />} />
          <Route path="/accessories/:category/:route" element={<AccessoryDetails />} />
          <Route path="order-summary" element={<OrderSummary />} />
          {/* dyanmic route for the users: */}
          <Route path="users" element={<Users />} />
          <Route path="users/:userId" element={<UserDetails />} />
          <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Nomatch />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App