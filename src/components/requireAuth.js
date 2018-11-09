import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ChildComponent => {
  class ComposedComponent extends Component {

    //OUR component got rendered
    componentDidMount(){
      this.navigateAway();
    };

    //OUR component got updated
    componentDidUpdate(){
      this.navigateAway();
    };
  
    navigateAway(){
      if(!this.props.auth){
        this.props.history.push('/')
      } 
    }
    render(){
      return(
      <ChildComponent {...this.props} />
      )
    }
  }

  function mapStateToProps({auth}){
    return{ auth }
  };

  return connect(mapStateToProps)(ComposedComponent);
};
