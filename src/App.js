
import './App.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import ProtectedRoute from './Components/ProtectedRoute';
function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/signin" component={SignIn}/>
          <ProtectedRoute exact path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
