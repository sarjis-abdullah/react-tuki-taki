import React from 'react';
import { FormControl, InputLabel, OutlinedInput, Grid, Button } from '@material-ui/core';
import UseForm from './UseForm'
import validate from '../../util/validateLogin'
export default function StateTextFields(props) {
    
    const { form, handleChanges, handleSubmit, errors } = UseForm(submit, validate)
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
