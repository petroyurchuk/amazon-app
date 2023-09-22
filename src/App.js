import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Product } from "./pages/";
import { Navbar, SearchResults, Checkout } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
