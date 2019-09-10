import React, {useState} from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'

const SignIn = ({esis,gsis}) => {
    const [userCred, setCreds] = useState(
        {
            email: '',
            password: ''
        }
    )
    const {email,password} = userCred
    const handleSubmit = async event => {
        event.preventDefault();        
        esis(email,password);
    }

    const handleChange = event => {
        const {value,name} = event.target
        setCreds({
            ...userCred, [name]:value
        })
    }
  
    return(
        <div className="sign-in">
            <h2>Sign me in!</h2>
            <span> Sign in with your Email and Password!</span>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    name="email" 
                    value={email} 
                    handleChange={handleChange} 
                    label="Email" 
                    required/>
                <FormInput 
                    name="password" 
                    type="password"
                    value={password} 
                    handleChange={handleChange} 
                    label="Password"
                    required/>
                <div className="buttons">
                    <CustomButton type="submit">
                        Sign In!
                    </CustomButton>
                    <CustomButton 
                        type="button" 
                        onClick={gsis} 
                        isGoogleSignIn
                    >
                        Sign in With Google!
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

const mdtp = dispatch => ({
    gsis: ()=> dispatch(googleSignInStart()),
    esis: (email,password)=> dispatch(emailSignInStart({email,password}))
})

export default connect(null,mdtp)(SignIn)