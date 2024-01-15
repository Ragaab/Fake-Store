import { useContext, useEffect, useState } from "react";
import "../componentsCSS/header.css";
import Cart from "./Cart";
import { BsBag } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import logo from "../images/logo.svg";
import { useDispatch, useSelector } from "react-redux";

function Header() {
    let { isOpen, setIsOpen } = useContext(CartContext);
    let [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 60 ? setScroll(true) : setScroll(false);
        });
    });

    let cart = useSelector((state) => state.cart);
    return (
        <div className={`${scroll === true ? "background" : ""} header position-fixed py-1 z-3`}>
            <div className="container d-flex justify-content-between align-items-center">
                <img src={logo} alt="" />
                <div onClick={() => setIsOpen(!isOpen)} className="bag position-relative">
                    <BsBag className="fs-5" />
                    <div className="cart-count position-absolute">{cart.length}</div>
                </div>
                <Cart />
            </div>
        </div>
    );
}
export default Header;
