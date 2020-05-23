import React from 'react';
import { useDispatch } from 'react-redux'
import { FormControl, InputLabel, OutlinedInput, Grid, Button } from '@material-ui/core';
import UseForm from '../hooks/UseForm'
import validate from '../../util/validateCreateProject'
import { createProject } from '../../store/actions/projectActions'
export default function StateTextFields(props) {
    const dispatch = useDispatch()
    //let formData = { name: '', email: '', password: '', cPassword: '' }
    let formData = { name: '' }
    const { form, handleChanges, handleSubmit, errors } = UseForm(submit, formData, validate)
    function submit() {
       createProject({type:'createProject', payload: form, dispatch})
        // document.getElementById("loginForm").reset();
        // e.target.reset()
    };

    return (
        <Grid container spacing={3} style={{ justifyContent: 'center', marginTop: 10 }}>
            <Grid item xs={8}>
                <form onSubmit={handleSubmit}>
                    <FormControl fullWidth variant="outlined" style={{ marginTop: 5 }}>
                        <InputLabel htmlFor="outlined-adornment-amount">
                            Name
                    </InputLabel>
                        <OutlinedInput
                        pattern="[a-z]{1,15}"
                            name="name"
                            id="outlined-adornment-amount"
                            onChange={handleChanges}
                            labelWidth={60}
                        />
                        {errors.name && <p>{errors.name}</p>}
                    </FormControl>
                    {/* <FormControl fullWidth variant="outlined" style={{ marginTop: 5 }}>
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
                    </FormControl> */}

                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}