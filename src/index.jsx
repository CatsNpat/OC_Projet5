import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NavBanner from "./components/nav";
import FooterNav from "./components/footer";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "./assets/my-sass.scss";


export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavBanner />
      </nav>

      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
          <Route index element={<Home />} />
          <Route path="APropos" element={<APropos />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        {/* </Route> */}
      </Routes>

      <footer>
        <FooterNav />
      </footer>
      
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);