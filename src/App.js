import "./App.css";
// import Footer from "./Components/Common/Footer";
// import Navbar from "./Components/Common/Navbar";
import Index from "./Components/Home/Index";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ContactUsForm from "./Components/ContactUs";
import GetInTouchForm from "./Components/GetInTouchForm";
import PLPindex from "./Components/Product/PLPindex";
import ProductDescription from "./Components/Product/ProductDescription";
import AllProducts from "./Components/Product/AllProducts";
import About from './Components/About';
import SparePartIndex from "./Components/Spare Parts/SparePartIndex";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index />} />
        <Route path="contact-us" element={<ContactUsForm />} />
        <Route path="about-us" element={<About />} />
        <Route path="get-in-touch" element={<GetInTouchForm />} />
        <Route path="products" element={<PLPindex />} />
        <Route path="spare-parts" element={<SparePartIndex />} />
        <Route path="all-products" element={<AllProducts />} />
        <Route path="products/EV/:id" element={<ProductDescription />} />
      </Route>
    </Routes>
  );
}

export default App;
