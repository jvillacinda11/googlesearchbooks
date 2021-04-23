import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Search from './pages/Search/'
import Saved from './pages/Saved/'
import AppBar from './components/AppBar'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      {/* <h1>App Page</h1> */}
      <Router>
          <AppBar />
          {/* <div>
            <Link to='/'>home</Link>
            <Link to='/login'>login</Link>
            <Link to='/profile'>profile</Link>
          </div> */}
          <Switch>
            <Route exact path='/'>
              <Saved />
            </Route>
            <Route path='/search'>
              <Search />
            </Route>
            
          </Switch>
      </Router>
    </>
  );
}

export default App;
