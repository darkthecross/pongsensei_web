import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/about";
import Demo from "./pages/demo";
import Home from "./pages/home";
import NoPage from "./pages/nopage";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="demo" element={<Demo />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
