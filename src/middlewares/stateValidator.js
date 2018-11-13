import tv4 from 'tv4';
import stateSchema from './stateSchema';

export default ({ dispatch, getState }) => next => action => {
  //here unlike the other middleware we are first going to send the middleware to the other middleware or reducer as we want the updated state
  next(action);

  if(!tv4.validate(getState(), stateSchema)){
    console.warn('There is a wrong input!!');
  };
  
}