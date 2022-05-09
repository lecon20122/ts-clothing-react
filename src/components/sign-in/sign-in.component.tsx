import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';
import { signInWithGoogle } from '../../firebase/firebase.util';
const SignIn = () => {
    interface ISignIn {
        email: string;
        password: string;
    }

    const [signIn, setSignIn] = useState<ISignIn>({ email: '', password: '' });

    const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
        if (signIn) {
            setSignIn({ ...signIn, [event.currentTarget.name]: event.currentTarget.value });
        }
    };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (signIn) {
            setSignIn({ email: '', password: '' });
        }
    };

    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput type="email" name="email" label="Email Address" value={signIn.email} onChange={handleChange} required={true} />
                <FormInput type="password" name="password" label="password" value={signIn.password} onChange={handleChange} required={true} />
                <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton className="google-sign-in" onClick={signInWithGoogle}>
                        Google Sign in
                    </CustomButton>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
