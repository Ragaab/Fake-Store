import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { productsfetch } from "../rtk/slices/productsSlice";
import "../componentsCSS/ProductsDetails.css";
import { addToCart } from "../rtk/slices/CartSlice";
import Header from "../Components/Header";

function ProductDetails() {
    let dispatch = useDispatch();
    const params = useParams();
    const [isId, setIsId] = useState([]);
    const prod = "https://fakestoreapi.com/products";
    useEffect(() => {
        fetch(`${prod}/${params.productId}`)
            .then((res) => res.json())
            .then((data) => {
                setIsId(data);
            }, []);
    });

    return (
        <>
            <Header />
            <div className="target-product">
                <div className="container">
                    <img className="product-image" src={isId.image} alt="" />
                    <div className="product-info">
                        <h2 className="my-2">{isId.title}</h2>
                        <span style={{ color: "#c45367" }} className="fw-bold ">
                            {isId.price} $
                        </span>
                        <p className="my-3">{isId.description}</p>
                        <div
                            onClick={() => {
                                dispatch(addToCart(isId));
                            }}
                            className="add-cart py-2 px-3 bg-black text-white text-center"
                        >
                            Add To Cart
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
