import React from 'react';
import './custom-button.style.scss';

const CustomButton = ({label,isGoogleSignIn, ...props}) => {
    return (
        <button className={`${isGoogleSignIn? 'google-btn':''} custom-button`} {...props}>
            {label}
        </button>
    );
}

export default CustomButton;
