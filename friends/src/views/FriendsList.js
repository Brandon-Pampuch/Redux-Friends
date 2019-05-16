import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions'

//component did mount should call data from get reqeust in action

class FriendsList extends React.Component {
  
     
    componentDidMount(){
        this.props.getData()
    }
    render() { 
        return ( 
            <div>
               {this.props.friends.map((friend, index) => <p key={index}>{friend.name} {friend.id}</p>)}
            </div>
         );
    }
}

const mapStateToProps = state =>({
    friends: state.friends
})
 
    
 
export default connect(mapStateToProps, {getData})(FriendsList);