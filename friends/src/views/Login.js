import React from "react";
import styled from "styled-components"
import { connect } from "react-redux";
import {loginUser} from "../actions"

const FormWrapper = styled.div`
display:flex;

border: 1px solid black;
padding: 20px;
width: 300px;
margin 100px auto;
`
const LoginInput = styled.input`
border: none;
border-bottom: 1px solid black;
`
const Button = styled.button`
padding: 10px 20px;
margin-top: 20px;
font-size: 16px;
border-radius: 5px;
`



class Login extends React.Component {
    state = { 
        credentials: {
            "username": "",
            "password": ""

        }
     }
  textChangeHandler = (event) =>{
      const newText = event.target.value
      this.setState({
        ...this.state,
        credentials: {...this.state.credentials,
        [event.target.name]:newText
        }
      })
    } 

    loginUser = (event) =>{
      event.preventDefault()
      console.log("object being passed to action",this.state.credentials)
      this.props.loginUser(this.state.credentials)
      .then(this.props.history.push('/friendsList'))
      //need to.then and history obj to protected route
    }

      render() { 
        return ( 
          <FormWrapper>
          <h1>Login  Friends</h1>
          <form onSubmit={this.loginUser}>
            <h2>user name</h2>
            <LoginInput onChange={this.textChangeHandler} name="username" type="text" value={this.state.credentials.username} />
            <h2>password</h2>
            <LoginInput onChange={this.textChangeHandler} name="password" type="text" value={this.state.credentials.password} />
            <Button>Login</Button> 
            {/* loader in button with isloggin in booliearn terinary */}
          </form>
        </FormWrapper>
         );
    }
}
 
const mapStateToProps = state =>{
  // islonginging: islonging a boolean for loader in button
}

export default connect(null,{loginUser})(Login);
