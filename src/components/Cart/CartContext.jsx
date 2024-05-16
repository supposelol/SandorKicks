import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
        // Check if the item is already in the cart
        const existingItemIndex = cartItems.findIndex(
            (cartItem) =>
                cartItem.id === item.id &&
                cartItem.size === item.size &&
                cartItem.isAccessory === item.isAccessory
        );

        if (existingItemIndex !== -1) {
            // If the same size variant of the item is already in the cart, update its quantity
            const updatedCart = [...cartItems];
            updatedCart[existingItemIndex].quantity += 1;
            setCartItems(updatedCart);
        } else {
            // If the item is not in the cart, add it
            setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId, size, isAccessory) => {
        // Find the item in the cart
        const itemIndex = cartItems.findIndex(
            (item) => item.id === itemId && item.size === size && item.isAccessory === isAccessory
        );
        if (itemIndex !== -1) {
            const updatedCart = [...cartItems];
            // If the item's quantity is greater than 1, decrement the quantity by 1
            if (updatedCart[itemIndex].quantity > 1) {
                updatedCart[itemIndex].quantity -= 1;
            } else {
                // If the item's quantity is 1, remove the item from the cart
                updatedCart.splice(itemIndex, 1);
            }
            // Update the cart state
            setCartItems(updatedCart);
        }
    };

    const removeAllFromCart = (itemId) => {
        // Remove all items with the same ID from the cart
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const updateQuantity = (itemId, size, isAccessory, newQuantity) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === itemId && item.size === size && item.isAccessory === isAccessory
                    ? { ...item, quantity: newQuantity }
                    : item
            )
        );
    };

    const emptyCart = () => {
        setCartItems([]);
    }

    const cartContextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        removeAllFromCart,
        updateQuantity,
        emptyCart
    };

    return (
        <CartContext.Provider value={cartContextValue}>
            {children}
        </CartContext.Provider>
    );
};