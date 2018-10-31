import React, { Component } from "react";

class CommentBox extends Component {
  state = { comment: ''};

  handleChange(event) {
    this.setState({comment: event.target.value });
  }
  handleSubmit(event){
    event.preventDefault();

    // call an action creator to add a comment to a list

    this.setState({comment: ''})
  }
  render(){
    return(
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
    )
  }
}
export default CommentBox;