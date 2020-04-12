import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

class RegisterBox extends React.Component {
    constructor(props) {
        super(props);

    }

    submitRegister = (e) => {

    }

    render() {
        return (
            <Box className="loginBox">

                <div className="loginFormBox">
                    <Box className="text">Register</Box>
                </div>
                <div className="box">
                <TextField 
                id="standard-required" 
                label="Username" />
                <br/>
                <br/>
                <TextField 
                id="standard-required" 
                label="Email" />
                <br/>
                <br/>
                <TextField
                    id="standard-password-input"
                    label="Password"
                    type="password"
                />
                </div>
                <br></br>
                <Button className="btnLogin" color="primary">
                    Register
                    </Button>
            </Box>
        )
    }
}

export default RegisterBox;
