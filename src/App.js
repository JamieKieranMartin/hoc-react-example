import React from 'react';

const Add = ({a,b}) => <span>{a} + {b} = {a+b}</span>;

const wrap = (Component) => (props) => 
    <Component {
      // spread new props object into Component
      ...Object
      .entries(props)
      // reduce the properties array to an object
      // + 1 to any entry that is of type number
      .reduce((obj, [key, value]) => ({ 
        ...obj, 
        [key]: typeof value == "number" ? value + 1 : value
       }), {})}
      />

const WrappedAdd = wrap(Add);

function App() {
  return (
    <div className="App">
      <WrappedAdd a={1} b={2} />
    </div>
  );
}

export default App;
