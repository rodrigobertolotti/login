import React from 'react';
import './App.css';
import LoginBox from './LoginBox';
import RegisterBox from './RegisterBox';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Button } from '@material-ui/core';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state={
      isLoginActive: true,
      isRegisterActive: false
    }
  }
  
  handleClickLogin = () => {
    this.setState({
      isLoginActive: true,
      isRegisterActive: false
    })
  };

  handleClickRegister = () => {
    this.setState({
      isLoginActive: false,
      isRegisterActive: true
    })
  };

  render(){
    return(
      <>
      <div className="autenticate">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button className="botonLoginReg"
          value="login"
          onClick={this.handleClickLogin}>Login</Button>
          <Button className="botonLoginReg"
          value="register"
          onClick={this.handleClickRegister}>Register</Button>
        </ButtonGroup>
        {this.state.isLoginActive && <LoginBox></LoginBox>}
        {this.state.isRegisterActive && <RegisterBox></RegisterBox>}
      </div>
      </>
    )
  }
}


export default App;
