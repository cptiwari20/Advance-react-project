import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';

import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
  moxios.install(); //stops the axios requests
  // now, fakes out the axios for not requesting any network request
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name: 'Fetch Comment #1'}, {name: 'Fetch Comment #2'}, {name: 'Fetch Comment #3'}]
  })
});

afterEach(() => {
  moxios.uninstall();
})
it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>
  );
  wrapped.find('.fetch-comments').simulate('click');
  
  // we need a pause to give moxios its work.
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(3);
    done(); // test suite does not exist until the done argument is called;
    wrapped.unmount();
  })
});