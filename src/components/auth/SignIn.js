import React, { useRef } from 'react';
import { FormControl, InputLabel, OutlinedInput, Grid, Button } from '@material-ui/core';


export default function StateTextFields(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const login = (e) => {
        e.preventDefault()
        let isValid = name && name.length && email && email.length
        if (isValid) {
            const data = {
                name,
                email
            }
            setName('')
            setEmail('')
            document.getElementById("loginForm").reset();
           // e.target.reset()
        } else {
            alert('nop')
        }

        // setData(event.target.value);
    };
    return (
        <Grid container spacing={3} style={{ justifyContent: 'center', marginTop: 10 }}>
            <Grid item xs={8}>
                <form id="loginForm" onSubmit={login}>
                    <FormControl fullWidth variant="outlined" style={{ marginTop: 5 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Name
                    </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            onChange={(e) => { setName(e.target.value) }}
                            labelWidth={60}
                        />
                    </FormControl>
                    <FormControl fullWidth variant="outlined" style={{ marginTop: 5 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Email
                    </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            onChange={(e) => { setEmail(e.target.value) }}
                            labelWidth={60}
                        />
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}
