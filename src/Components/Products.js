import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEye } from "@fortawesome/free-solid-svg-icons";

import "../componentsCSS/Products.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsfetch } from "../rtk/slices/productsSlice";
import { addToCart } from "../rtk/slices/CartSlice";
import Cart from "./Cart";

function Products() {
    let products = useSelector((state) => state.products);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(productsfetch());
    }, []);
    return (
        <div className="Products pt-5">
            <div className="container w-100">
                <div className="row">
                    {products.map((product) => {
                        return (
                            <div className="product col-lg-3 col-md-6 col-sm-12 text-center" key={product.id}>
                                <div className="img-box position-relative">
                                    <img src={product.image} alt="" />
                                    <div className="add-to-cart position-absolute p-2">
                                        <button className="border-0 bg-transparent d-block">
                                            <div
                                                className="d-flex justify-content-center align-items-center text-white"
                                                onClick={() => {
                                                    dispatch(addToCart(product));
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faPlus} />
                                            </div>
                                        </button>
                                        <button className="border-0 bg-transparent">
                                            <Link to={`/product/${product.id}`} className="link shadow d-flex justify-content-center align-items-center bg-white text-black">
                                                <FontAwesomeIcon icon={faEye} size="xs" />
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                                <p className="mt-2 mb-0 fw-bold">{product.title}</p>
                                <p className="fw-bold my-2">{product.price} $</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Products;
