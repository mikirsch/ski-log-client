import React from 'react';
import ReactDOM from 'react-dom';
import AddBasics from './AddBasics';

it('renders without crashing', () => {
  const dummy = () => null;
  const div = document.createElement('div');
  ReactDOM.render(
    <AddBasics
      readState={{
        newArea: 'foo',
        duration: null,
        durationError: false,
        date: new Date(),
        futureDateSelected: false,
        error: null,
        submitted: false,
        vert: false,
        totalVert: 0,
        notetoggle: true,
        notes: ''
      }}
      handleDateChange={dummy}
      handleDurationChange={dummy}
      handleToggle={dummy}
    />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
