import React from 'react';
import './form-input.styles.scss';

export interface IFormInputProps {
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    label?: string;
    name: string;
    type: string;
    value?: string;
    required?: boolean;
}

const FormInput: React.FunctionComponent<IFormInputProps> = ({ label, onChange, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={onChange} {...otherProps} />
            {label ? <label className={`${otherProps.value?.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
        </div>
    );
};

export default FormInput;
