import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../componenets/home/Home";
import About from "../componenets/page/about";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<About />} />
    </Routes>
  );
}
