import React from 'react';
import { FormControl, InputLabel, OutlinedInput, Grid, Button } from '@material-ui/core';
import useForm from './UseForm'

export default function StateTextFields(props) {
    const validate = (values) => {
        let { name, email } = values
        let errors = {}
        if (!email) {
            errors.email = 'Email is required'
        } else {
            let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let valid = re.test(email.toLowerCase());
            if (!valid) errors.email = 'Email is invalid';
        }
        if (!name) {
            errors.name = 'Name is required'
        } else if (name.length < 3) {
            errors.name = 'Minimum 4 letter'
        }
        return errors
    }
    const { form, handleChanges, handleSubmit, errors } = useForm(submit, validate)
    function submit() {
        console.log(form)
           // document.getElementById("loginForm").reset();
            // e.target.reset()
        
    };

    return (
        <Grid container spacing={3} style={{ justifyContent: 'center', marginTop: 10 }}>
            <Grid item xs={8}>
                <form id="loginForm" onSubmit={handleSubmit}>
                    <FormControl fullWidth variant="outlined" style={{ marginTop: 5 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Name
                    </InputLabel>
                        <OutlinedInput
                            name="name"
                            id="outlined-adornment-amount"
                            onChange={handleChanges}
                            labelWidth={60}
                        />
                        {errors.name && <p>{errors.name}</p>}
                    </FormControl>
                    <FormControl fullWidth variant="outlined" style={{ marginTop: 5 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Email
                    </InputLabel>
                        <OutlinedInput
                            name="email"
                            id="outlined-adornment-amount"
                            onChange={handleChanges}
                            labelWidth={60}
                        />
                        {errors.email && <p>{errors.email}</p>}
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}
