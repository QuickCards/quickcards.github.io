import PWABadge from "./PWABadge.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/core/Nav.jsx";
import AddWallet from "./pages/core/AddWallet.jsx";
import Settings from "./pages/Settings.jsx";
import Wallets from "./pages/core/Wallets.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wallets />} />
        </Routes>
        <Routes>
          <Route path="/add" element={<AddWallet />} />
        </Routes>
        <Routes>
          <Route path="/settings" element={<Settings />} />
        </Routes>
        <Nav />
      </BrowserRouter>
      <PWABadge />
    </>
  );
}

export default App;
