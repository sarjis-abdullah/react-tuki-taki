import React from 'react'
import SignInTextBox from './signInTextBox'
const SignIn = () => {
    return (
        <div>
            <SignInTextBox type="name"/>
            <SignInTextBox type="email"/>
        </div>
    )
}

export default SignIn
