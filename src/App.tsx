import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header-component';
import HomePage from './pages/homepage/homepage.page';
import ShopPage from './pages/shop/shop.page';
import { SignInAndSignUp } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.page';
import { auth } from './firebase/firebase.util';
import './App.scss';
import React from 'react';
import firebase from './firebase/firebase.util';
interface IAppState {
    currentUser: firebase.User | null;
}
interface IAppProps {}
export default class App extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
            currentUser: null
        };
    }

    unsubscribeFromAuth?: firebase.Unsubscribe = undefined;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ currentUser: user });
            console.log(user);
        });
    }

    componentWillUnmount() {
        if (this.unsubscribeFromAuth) {
            this.unsubscribeFromAuth();
            console.log('Hello');
        }
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/shop" element={<ShopPage />} />
                    <Route path="/login" element={<SignInAndSignUp />} />
                </Routes>
            </div>
        );
    }
}
