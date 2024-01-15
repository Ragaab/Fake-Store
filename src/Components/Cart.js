import { useContext, useState } from "react";
import "../componentsCSS/cart.css";
import { CartContext } from "../contexts/CartContext";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { IoMdClose } from "react-icons/io";
import { BiMinus } from "react-icons/bi";
import { BiPlus } from "react-icons/bi";
import { BsTrash3 } from "react-icons/bs";
import { decreaseamount, increaseamount, removeAllItems, removeItem } from "../rtk/slices/CartSlice";

function Cart() {
    let { isOpen, setIsOpen } = useContext(CartContext);

    let cart = useSelector((state) => state.cart);

    let dispatch = useDispatch();

    let totalPrice = cart.reduce((acc, cur) => {
        acc += cur.price * cur.quantity;
        return acc;
    }, 0);

    return (
        <>
            <div className={`${isOpen ? "end-0" : null} sidebar position-fixed top-0 h-100 bg-white z-3`}>
                <div className="cart">
                    <div className="cart-header px-2 py-3 d-flex align-items-center">
                        <div className="cart-quantity">Shooping Bag ({cart.length})</div>
                        <div>
                            <AiOutlineArrowRight
                                className="cart-close"
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                }}
                            />
                        </div>
                    </div>
                    <div className="cart-content px-4 py-0">
                        {cart.map((product) => {
                            return (
                                <div className="cart-box d-flex align-items-center pt-4 pb-4" key={product.id}>
                                    <div className="pe-4">
                                        <img src={product.image} alt=""></img>
                                    </div>
                                    <div className="w-100">
                                        <div className="top d-flex justify-content-between pb-2">
                                            <p className="m-0 fw-bold">{product.title}</p>
                                            <div
                                                onClick={() => {
                                                    dispatch(removeItem(product));
                                                }}
                                            >
                                                <IoMdClose className="remove" />
                                            </div>
                                        </div>
                                        <div className="bottom d-flex justify-content-between align-items-center pt-2">
                                            <div className="plus-minus px-2 d-flex align-items-center">
                                                <BiMinus
                                                    className="fs-6"
                                                    onClick={() => {
                                                        dispatch(decreaseamount(product));
                                                    }}
                                                />
                                                <span className="quantity fw-bold">{product.quantity}</span>
                                                <BiPlus
                                                    className="fs-6"
                                                    onClick={() => {
                                                        dispatch(increaseamount(product));
                                                    }}
                                                />
                                            </div>
                                            <span className="fw-bold">${Math.round(product.price * product.quantity)}</span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="cart-footer p-4">
                        <div className="footer-head d-flex justify-content-between align-items-center pt-4">
                            <span className="">TOTAL: ${totalPrice.toFixed(2)}</span>
                            <div className="clear-cart text-light">
                                <BsTrash3
                                    className="trash fs-6"
                                    onClick={() => {
                                        dispatch(removeAllItems(cart));
                                    }}
                                />
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#242424" }} className="check-out text-white p-3 text-center mt-2 mb-1">
                            Checkout
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
