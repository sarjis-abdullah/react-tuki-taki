import React from 'react'
import { Button } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'
const SignInLinks = () => {
	return (
		<div>
			<Button color="inherit">
				<RouterLink to="/create-project" style={{ textDecoration: 'none', color: 'white' }}>
					New Project
        </RouterLink>
			</Button>
			<Button color="inherit">Sign out</Button>
		</div>
	)
}

export default SignInLinks
