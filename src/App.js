import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ Portfolio }/>
    </div>
  );
}

export default App;
