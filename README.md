# useHideIfNoChildren

> Well, it hides your component if it has no children!

## Installation

```
npm install use-hide-if-no-children --save
```

## Usage

```jsx
import * as React from 'react';
import { useHideIfNoChildren } from 'use-hide-if-no-children';

const App = () => {
  const hideIfNoChildren = useHideIfNoChildren();

  return (
    <div 
      {...hideIfNoChildren} 
      style={{ backgroundColor: 'pink', padding: '1rem', display: 'flex' }}
    >
      {/* if there are 0 nodes here, then the parent component will be hidden. */}
    </div>
  );
};
```

## `useHideIfNoChildren(options)` API

### options

#### refKey

> `string` | Optional

Provide an override ref key (if your component forwards ref under a different prop).

## License

MIT © [Jake Moxey](https://github.com/jxom)

