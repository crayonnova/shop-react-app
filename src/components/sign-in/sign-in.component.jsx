import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {signInWithGoogle,auth} from '../../firebase/firebase.utils';
import './sign-in.style.scss';
class SignIn extends Component {
    constructor() {
        super()
    
        this.state = {
            email : '',
            password :''
        }
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        const { email, password } = this.state;
        console.log({email,password});
        
        await auth.signInWithEmailAndPassword(email,password)
        .then( () => {
            this.setState({
                email : '',
                password :''
            })
        })
        .catch(message => {console.log(message);})
    
    }
    handleChange = (e) => {
        const {name,value} = e.target
        console.log({name,value});
        this.setState( { [name] : value })
         
    }
    render() {
        return (
            <div className="sign-in">
                <h2>I already have account</h2>
                <span className='title'>Sign in with your email address</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput

                     label='Email' name='email' type='email' 

                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    />

                    <FormInput 
                    label='Password' name='password' type='password' 
                    value={this.state.password}  
                    handleChange={this.handleChange} 
                    />

                    <CustomButton label='Sign in' type='submit' />
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle} label='Login with google' type='button' />
                </form>
            </div>
        )
    }
}
export default SignIn