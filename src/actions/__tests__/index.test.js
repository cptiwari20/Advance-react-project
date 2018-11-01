import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('save comment', () => {
  it('has a correct action type', () => {
    const action = saveComment(); // saveComment is an action creator

    expect(action.type).toEqual(SAVE_COMMENT);
  });
  it('has a correct payload', () => {
    const action = saveComment('New Comment');

    expect(action.payload).toEqual('New Comment')
  })
})