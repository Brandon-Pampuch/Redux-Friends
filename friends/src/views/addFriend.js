import React from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { addFriend } from '../actions'

const FormWrapper = styled.div`
display:flex;

border: 1px solid black;
padding: 20px;
width: 300px;
margin 100px auto;
`
const AddInput = styled.input`
border: none;
border-bottom: 1px solid black;
`
const Button = styled.button`
padding: 10px 20px;
margin-top: 20px;
font-size: 16px;
border-radius: 5px;
`




class AddFriend extends React.Component {
    state = { 
        name: "",
        age: "",
        email: "",
     }



    textChangeHandler = (event) =>{
        const newText = event.target.value
        this.setState({
          ...this.state,
          [event.target.name]:newText
          
        })
      } 
    addFriend = (event) =>{
      event.preventDefault();
      console.log("addfriend in addfriend", this.state)
      
      this.props.addFriend(this.state)

    }


    render() { 
        return ( 
            <FormWrapper>
            <h1>Add new Friend</h1>
            <form onSubmit={this.addFriend}>
              <h2>name</h2>
              <AddInput onChange={this.textChangeHandler} name="name" type="text" value={this.state.name} />
              <h2>age</h2>
              <AddInput onChange={this.textChangeHandler} name="age" type="text" value={this.state.age} />
              <h2>email</h2>
              <AddInput onChange={this.textChangeHandler} name="email" type="text" value={this.state.email} />
              <Button>Add User</Button> 
              {/* loader in button with isloggin in booliearn terinary */}
            </form>
          </FormWrapper>
         );
    }
}

const setStateToProps = state =>({

})

export default connect(setStateToProps,{addFriend})(AddFriend)

