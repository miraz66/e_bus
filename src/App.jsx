import { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

// ---All pages---
import Home from "./pages/MainPages";
import MobileApp from "./pages/MobileApp";

export const Mode = createContext();

function App() {
  const [mode, setMode] = useState(false);
  AOS.init();

  return (
    <>
      <Mode.Provider value={[mode, setMode]}>
        <BrowserRouter>
          <Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/app" element={<MobileApp />} />
            </Routes>
          </Header>
        </BrowserRouter>
      </Mode.Provider>
    </>
  );
}

export default App;
