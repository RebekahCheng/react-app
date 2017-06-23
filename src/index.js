// importing React which is the library that allows us to build React components
import React from 'react';

// importing ReactDOM which is the library that allows us to place our components and work with them in the context of the DOM
import ReactDOM from 'react-dom';

// importing the component that we just worked on, the App component
import App from './App';

ReactDOM.render(
  <App txt="Rebekah's first React app" />,
  document.getElementById('root')
  );
