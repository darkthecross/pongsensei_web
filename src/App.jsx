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
        <Route path="demo_1" element={<Demo id={1} />} />
        <Route path="demo_2" element={<Demo id={2} />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;
