import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component';
import {googleSignInStart, emailSignInStart} from '../../redux/user/user.actions'
import {connect} from 'react-redux'

class SignIn extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {esis} = this.props;
        const {email,password} = this.state
        esis(email,password);
    }

    handleChange = event => {
        const {value,name} = event.target
        this.setState({
            [name]:value
        })
    }

    render() {
        const {gsis}= this.props
        return(
            <div className="sign-in">
                <h2>Sign me in!</h2>
                <span> Sign in with your Email and Password!</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="Email" 
                        required/>
                    <FormInput 
                        name="password" 
                        type="password"
                        value={this.state.password} 
                        handleChange={this.handleChange} 
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
}

const mdtp = dispatch => ({
    gsis: ()=> dispatch(googleSignInStart()),
    esis: (email,password)=> dispatch(emailSignInStart({email,password}))
})

export default connect(null,mdtp)(SignIn)