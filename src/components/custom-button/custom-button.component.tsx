import React from 'react';
import './custom-button.styles.scss';

interface ICustomButton {
    type?: 'button' | 'submit' | 'reset';
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
const CustomButton: React.FunctionComponent<ICustomButton> = ({ children, className, ...otherProps }) => {
    return (
        <button className={`${className ? className : ''} custom-button`} {...otherProps}>
            {children}
        </button>
    );
};

export default CustomButton;
