import "./App.css";
import Home from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "./pages/ProductDetailsPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/product/:productId" element={<ProductDetails />}></Route>
            </Routes>
        </div>
    );
}

export default App;
