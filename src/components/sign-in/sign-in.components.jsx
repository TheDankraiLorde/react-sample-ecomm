import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components'
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

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
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email: '',password: ''},()=>{ console.log(this.state)})
        }
        catch(error){
            console.log("Error")
        }
    }

    handleChange = event => {
        const {value,name} = event.target
        this.setState({
            [name]:value
        })
    }

    render() {
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
                        <CustomButton signInWithGoogle={signInWithGoogle}>
                            Sign in With Google!
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn