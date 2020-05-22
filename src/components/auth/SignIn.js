import React from 'react';
import { FormControl, InputLabel, OutlinedInput, Grid, Button } from '@material-ui/core';


export default function StateTextFields(props) {
    const [form, setForm] = React.useState({ name: '', email: '' });
    const handleChanges = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    const submit = (e) => {
        e.preventDefault()
        let isValid = form.name && form.name.length && form.email && form.email.length
        if (isValid) {
            console.log(form)
            document.getElementById("loginForm").reset();
            // e.target.reset()
        } else {
            alert('nop')
        }
    };
    return (
        <Grid container spacing={3} style={{ justifyContent: 'center', marginTop: 10 }}>
            <Grid item xs={8}>
                <form id="loginForm" onSubmit={submit}>
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
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">
                        Login
                    </Button>
                </form>
            </Grid>
        </Grid>
    );
}
