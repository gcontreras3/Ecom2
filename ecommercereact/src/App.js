import Products from './components/Products'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        
        <div className="nav">
        <a href="About">About</a>
        <a href="Products">Products</a>
        <a href="Contact">Contact Page</a>
      </div>
      </header>
      <Products />
    </div>
  );
}

export default App;
