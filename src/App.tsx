import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header-component';
import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop.page';
import './App.scss';
function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
            </Routes>
        </div>
    );
}

export default App;
