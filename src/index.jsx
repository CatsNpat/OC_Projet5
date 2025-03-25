import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBanner from "./components/nav";
import FooterNav from "./components/footer";
import APropos from "./pages/APropos";
import LogementDetail from "./pages/LogementDetail";
import NoPage from "./pages/NoPage";
import "./assets/my-sass.scss";


export default function App() {
  return (
    <BrowserRouter>
      <header  className='header'>
        <NavBanner />
      </header>

      <Routes>
          <Route index element={<Home />} />
          <Route path="APropos" element={<APropos />} />
          <Route path="LogementDetail/:id" element={<LogementDetail />} />
          <Route path="*" element={<NoPage />} />
      </Routes>

      <footer>
        <FooterNav />
      </footer>
      
    </BrowserRouter>
  );
}
