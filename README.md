## Dependencies:

- [RXJS](https://rxjs-dev.firebaseapp.com)
- [React Hooks](https://pt-br.reactjs.org/docs/hooks-intro.html)

### Install project dependencies:
```
$ cd your-react-project
$ yarn add rxjs
```

### Example

```
import React from 'react';
import useLongPress from 'your-path/useLongPress';

const YourComponent = () => {

  useLongPress(`#selector`, (event) => {
    console.log("I'm pressed - event >>> ", event)
  },2500); //Custom timeout

   return (<button id="selector" name="button">
      Hold me
   </button>);
}

export default YourComponent;

```


