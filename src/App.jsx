import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// ---All pages---
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  );
}

export default App;
