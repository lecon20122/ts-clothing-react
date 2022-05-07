import React from 'react';
import './form-input.styles.scss';

export interface IFormInputProps {
    type: string;
    name: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    value?: string;
    label?: string;
    required?: boolean;
}

const FormInput: React.FunctionComponent<IFormInputProps> = ({ type, name, value, onChange, label, required }) => {
    return (
        <div className="group">
            <input type={type} name={name} value={value} onChange={onChange} required={required} />
            <label>{label}</label>
        </div>
    );
};

export default FormInput;
