import React from 'react';
import { FormControl, InputLabel, OutlinedInput, Grid, Button } from '@material-ui/core';
import UseForm from './UseForm'
import validate from '../../util/validateLogin'
export default function StateTextFields(props) {
    let formData = { name: '', email: '', password: '', cPassword: '' }
    const { form, handleChanges, handleSubmit, errors } = UseForm(submit, formData, validate)
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
                    <FormControl fullWidth variant="outlined" style={{ marginTop: 5 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Password
                    </InputLabel>
                        <OutlinedInput
                            name="password"
                            type="password"
                            onChange={handleChanges}
                            labelWidth={60}
                        />
                        {errors.password && <p>{errors.password}</p>}
                    </FormControl>
                    <FormControl fullWidth variant="outlined" style={{ marginTop: 5 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Confirm Password
                    </InputLabel>
                        <OutlinedInput
                            name="cPassword"
                            type="password"
                            onChange={handleChanges}
                            labelWidth={60}
                        />
                        {errors.isPasswordSame && <p>{errors.isPasswordSame}</p>}
                    </FormControl>

                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}
