import { createContext, useState } from "react";
import cart from "../Components/Cart";
import { BsSliders2Vertical } from "react-icons/bs";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons";

export let CartContext = createContext();
const CartProvider = ({ children }) => {
    let [isOpen, setIsOpen] = useState(false);
    return <CartContext.Provider value={{ isOpen, setIsOpen }}>{children}</CartContext.Provider>;
};

export default CartProvider;
