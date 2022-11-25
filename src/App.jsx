import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Main from "./pages/Main";
// import Home from "./pages/Home/Home";
// import Hotdeals from "./pages/HotDeals/Hotdeals";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/" element={<Home />} />
          <Route path="/" element={<Hotdeals />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
