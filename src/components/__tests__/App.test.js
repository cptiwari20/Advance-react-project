import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App';

// it(); // it is a global function(we do not need to import or require it.) It describes the test file we are going to run.
it('show a comment box', () => {
  const div = document.createElement('div'); //creates a JSDOM div inside the terminal

  ReactDOM.render(<App />, div); // render that component in that div element
  // look inside the div and check whether the commentBox is there or not;
  expect(div.innerHTML).toContain('Comment Box')

  ReactDOM.unmountComponentAtNode(div); // revmoves the test object
})