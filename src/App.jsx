import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ---All pages---
import Home from "./pages/MainPages";
import MobileApp from "./pages/MobileApp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/app" element={<MobileApp />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
