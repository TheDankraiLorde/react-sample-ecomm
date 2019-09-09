import React, {useState} from 'react'
import {connect} from 'react-redux'
import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component'
import './sign-up.styles.scss'
import { userSignUpStart } from '../../redux/user/user.actions';

const SignUp = ({signUpStart}) => {
    const [userCreds,setUserCreds] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const {displayName,email,password,confirmPassword} = userCreds
    const handleSubmit = async event => {
        event.preventDefault();
        if(password !== confirmPassword){
            alert("Passwords don't match!")
            return;
        }
       signUpStart({displayName,email,password})
    }

    const handleChange = event => {
        const {name,value} = event.target;
        setUserCreds({
            ...userCreds,
            [name]:value
        }) 
    }
    
    return (
        <div className="sign-up">
            <h2 className='title'>
                Nah I'm a dipshit sign me up
            </h2>
            <span>Sign up with your email and password</span>
            <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display Name" required/>
                <FormInput type="email" name="email" value={email} onChange={handleChange} label="Email" required/>
                <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required/>
                <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required/>
                <CustomButton type="submit">Sign Up!</CustomButton>
            </form>
        </div>
    )
    
}

const mdtp = dispatch => ({
    signUpStart: userCredentials => dispatch(userSignUpStart(userCredentials))
})

export default connect(null,mdtp)(SignUp)