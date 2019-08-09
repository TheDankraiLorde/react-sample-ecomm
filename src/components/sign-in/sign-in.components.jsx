import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.components'

class SignIn extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            email: '',
            password: ''
        })
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
                <h2>I have a working brain. Sign me up!</h2>
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
                        value={this.state.password} 
                        handleChange={this.handleChange} 
                        label="Password"
                        required/>
                </form>
            </div>
        )
    }
}

export default SignIn