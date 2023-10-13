
import Navbar from './components/navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import home from './pages/Home';
function App() {
  return (
   <div>
  <Router>
    <Navbar />
      <Switch>
        <Route path='/' exact Component={home} />
      </Switch>
  </Router>
   </div>
  );
}

export default App
