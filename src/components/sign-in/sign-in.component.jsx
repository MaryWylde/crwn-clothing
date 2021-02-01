import React from 'react';

import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

// class b'coz we have to store what the users are
//typing in

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password: ''

        }
    }

    handleSubmit = event => {
        event.preventDefault();
    
        this.setState({ email: '', password: '' });
      };
    
      handleChange = event => {
        const { value, name } = event.target;
    
        this.setState({ [name]: value });
      };


    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
     
            <form >
                  <FormInput 
                        name='email' 
                        type='email' 
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        label='Email'
                        required/>
                  


              
                  <FormInput 
                        name='password'
                        type='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required
                        label='Password'
                       />

   <CustomButton type='submit'> Sign in </CustomButton> 
                
              </form>
             
            </div> 
        )
    }
}

export default SignIn;