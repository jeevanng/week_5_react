// import logo from './logo.svg';
import './App.css';

// Import custom JSX element:
import FruitList from './FruitList';

// some comment here 


function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <ul>
        {/* Array of li tags with fruit names as contents */}
        {/* Use custom JSX element: */}
        <h1>Fruits List 1</h1>
        <FruitList listToShow={['banana', 'mango', 'pineapple']}/> 

        <h1>Fruits List 2</h1>
        <FruitList listToShow={['apple', 'oranges', 'pears']}/> 

        <h1>Fruits List 3</h1>
        <FruitList listToShow={['watermelon', 'figs', 'blood orange']}/> 

        <FruitList listToShow={['blueberry', 'blueplum', 'concord grapes']}>
          {/* This h3 is a child of FruitList */}
          <h3>Blue Fruits are rare</h3>
          <h4>Blue Fruits are uncommon</h4>
        </FruitList>
      </ul>
    </div>
  );
}

export default App;
