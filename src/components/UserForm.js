import React, { Component } from 'react'

export class UserForm extends Component {
    state = {
        step:1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    }

    // Methods: Next Step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    
    }
    
    // Methods: Previous Step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }

    // Method: Handle 
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}

export default UserForm
