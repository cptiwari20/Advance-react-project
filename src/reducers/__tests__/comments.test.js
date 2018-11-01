import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it('handle the comment reducer with action type="SAVE_COMMENT"', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New Comment'
  }
  const newState = commentsReducer([], action);

  expect(newState).toEqual(['New Comment']);
});

it('handle the action of unknown type', () => {
  const newState = commentsReducer([], {}); // you may also add some fake action type and payload
  expect(newState).toEqual([]);
  //it shows that action of unknown type do not throw any error
});