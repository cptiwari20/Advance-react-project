import React, { Component } from "react";
import { connect } from 'react-redux';
import { saveComment, fetchComments } from 'actions';
import requireAuth from 'components/requireAuth';

class CommentBox extends Component {
  state = { comment: ''};

  handleChange(event) {
    this.setState({comment: event.target.value });
  }
  handleSubmit(event){
    event.preventDefault();

    // call an action creator to add a comment to a list
    this.props.saveComment(this.state.comment);
    this.setState({comment: ''})
  }
  render(){
    return(
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <h2>Comment Here</h2>
        <textarea 
          value={this.state.comment}
          onChange={this.handleChange.bind(this)}
          autoFocus 
        />
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
      <button className='fetch-comments' onClick={this.props.fetchComments}>
        Fetch Comment
      </button>
      </div>
    )
  }
}


export default connect(
  null,
 { saveComment, fetchComments }
 )(
   requireAuth(CommentBox)
  );