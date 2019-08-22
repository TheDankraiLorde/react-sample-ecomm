import React from 'react';
import './custom-button.styles.scss'

const CustomButton = ({children, signInWithGoogle, inverted, ...otherProps}) => (
    <button className={`${inverted? 'inverted': ''} custom-button ${signInWithGoogle?'google-sign-in':''}`} onClick={signInWithGoogle} {...otherProps}>
        {children}
    </button>
)

export default CustomButton