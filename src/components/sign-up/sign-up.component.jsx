import React, { Component } from 'react'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-up.style.scss';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils'
export default class SignUp extends Component {
    constructor(){
        super();
        this.state = {
            displayName : '',
            email : '',
            password : '',
            confirmPassword : ''

        }
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert('passwords not match!')
            return ;
        }

        try{
            const user  = await auth.createUserWithEmailAndPassword(email,password); //get auth
            console.log(user);

            createUserProfileDocument(user, {displayName});

            this.setState({             //clean the state
                displayName : '',
                email : '',
                password : '',
                confirmPassword : ''
            })

        }catch(error) { 
            console.log(error);
        }
    }
    handleChange = (e) => {
        const {name,value} = e.target
        this.setState( { [name] : value })
         
    }
    render() {
        return (
            <div className="sign-up">
            <h2>I do not have account</h2>
            <span className='title'>Sign up in sec</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput label='Display Name' name='displayName' type='text' value={this.state.displayName} handleChange={this.handleChange} />
                <FormInput label='Email' name='email' value={this.state.email} type='email' handleChange={this.handleChange} />
                <FormInput label='password' name='password' value={this.state.password} type='password' handleChange={this.handleChange} />
                <FormInput label='confirm password' name='confirmPassword' value={this.state.confirmPassword} type='password' handleChange={this.handleChange} />
                <CustomButton label='Sign up' type='submit'/>
            </form>
        </div>
        )
    }
}
