import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Category from "./pages/Category";
import Single from "./pages/Single";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/single" element={<Single />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;