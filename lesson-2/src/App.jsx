import './App.css';
import Home from './routes/home/Home';
import Login from './routes/login/Login';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login">
        <Login/>
      </Route>
    </div>
  );
}

export default App;