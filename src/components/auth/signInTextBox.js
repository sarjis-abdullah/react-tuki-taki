import React from 'react';
import { FormControl, InputLabel, OutlinedInput, Grid } from '@material-ui/core';


export default function StateTextFields(props) {
    const [name, setName] = React.useState('Cat in the Hat');
    const handleChange = (event) => {
        setName(event.target.value);
        console.log(name)
    };
    return (
        <Grid container spacing={3} style={{ justifyContent: 'center', marginTop:10 }}>
            <Grid item xs={8}>
                <FormControl fullWidth variant="outlined" style={{marginTop:5}}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                        {props.type}
                    </InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        onChange={handleChange}
                        labelWidth={60}
                    />
                </FormControl>
            </Grid>
        </Grid>
    );
}
