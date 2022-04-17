import {
  Routes,
  Route,
} from "react-router-dom";
import HomePage from './pages/homepage/homepage.page';
import ShopPage from "./pages/shop/shop.page";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
