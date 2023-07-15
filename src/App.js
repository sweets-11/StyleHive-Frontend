import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Protected from "./Protected";
import Auth from "./auth/Auth"
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Protected Component={Home} />} />
          <Route path="item/:itemId" element={<Protected Component={ItemDetails} />} />
          <Route path="checkout" element={<Protected Component={Checkout} />} />
          <Route path="checkout/success" element={<Protected Component={Confirmation} />} />
        </Routes>
        <CartMenu />
      </BrowserRouter>
    </div>
  );
}

export default App;