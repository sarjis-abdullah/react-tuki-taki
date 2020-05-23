import React from 'react'
import { Button } from '@material-ui/core'
import {Link as RouterLink} from 'react-router-dom'
const SignOutLinks = () => {
    return (
        <div>
            <Button color="inherit">
                <RouterLink to="/signup" style={{textDecoration:'none', color:'white'}}>
                Sign up
                </RouterLink>
            </Button>
            <Button color="inherit">
            <RouterLink to="/signin" style={{textDecoration:'none', color:'white'}}>
                Login
                </RouterLink>
            </Button>
        </div>
    )
}

export default SignOutLinks
