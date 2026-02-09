import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "./layouts/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import Product from "./pages/Product.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/product" element={<Product />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
