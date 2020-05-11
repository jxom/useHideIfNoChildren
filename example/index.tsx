import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useHideIfNoChildren } from '../.';

const App = () => {
  const [numberOfChildren, setNumberOfChildren] = React.useState(0);
  
  const hideIfNoChildren = useHideIfNoChildren();

  return (
    <div>
      <button onClick={() => setNumberOfChildren(n => n + 1)}>
        Add a child
      </button>
      <button onClick={() => setNumberOfChildren(n => n > 0 ? n - 1 : 0)}>
        Remove a child
      </button>
      <div {...hideIfNoChildren} style={{ backgroundColor: 'pink', padding: '1rem', display: 'flex' }}>
        {Array.from(Array(numberOfChildren).keys()).map(i => (
          <div>{i}</div>
        ))}
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
