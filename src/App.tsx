import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header-component';
import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop.page';
import './App.scss';
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/login" element={<SignInAndSignUp />} />
            </Routes>
        </div>
    );
}

export default App;
