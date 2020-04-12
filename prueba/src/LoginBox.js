import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';

import { connect } from 'react-redux';
import { actualizar } from './redux/Actions';


class LoginBox extends React.Component {
    
    constructor(props){
        super(props)
    }

    /*processLogin = () => {
        console.log(this.state.user + " " + this.state.password)
        props.actualizar
    }*/

    handleChangeUser = (e) =>{
        this.setState({
            user: e.target.value
        })
    }

    handleChangePassword = (e) =>{
        this.setState({
            password: e.target.value
        })
    }
    
    render() {
        return (
            <>
            <p>Bienvenido: {this.props.user}</p>
            <Box className="loginBox">
                <div className="loginFormBox">
                    <Box className="text">Login</Box>
                </div>
                <div className="box">
                <TextField 
                onChange={this.handleChangeUser}
                id="standard-required" 
                label="Username" />
                <br/>
                <br/>
                <TextField
                    onChange={this.handleChangePassword}
                    id="standard-password-input"
                    label="Password"
                    type="password"
                />
                </div>
                <br></br>
                <Button onClick={() => this.props.actualizar(this.state.user)} color="primary">Login</Button>
            </Box>
            </>
        )
    }
}
//El state del mapStateToProps es el del dispatcher
const mapStateToProps = state => {
    return {
        usuario: state.user,
    }
}

const mapDispatchToProps = dispatch => ({
    actualizar: user => dispatch(actualizar(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginBox)