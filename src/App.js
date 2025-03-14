import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post/Post";
import Detail from "./pages/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/list" replace />} />
        <Route path="/list" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/linkpost" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
