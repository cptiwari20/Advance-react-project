export default ( { dispatch } ) => next => action => {
  // check, if the payload property of action is a promise or not, if not then forward it
  if(!action.payload || !action.payload.then){
    return next(action);
  };
  // if it is a promise then resolve it first and then send it to the next middleware
  // wait and resolve the promise, take the data and add the resolved data with the newly created actions and dispatch it
  action.payload.then(function(response){
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });

}; 


// export default function({dispatch}){
//   return function(next){
//     return function(actions){
//         a normal format of middleware;
//     }
//   }
// }