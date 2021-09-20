import React from 'react';
import './App.scss';
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Chat from './components/chat/Chat'
import ProtectedRoute from "./components/router/ProtectedRoute";
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSmile, faImage } from "@fortawesome/free-regular-svg-icons";
import { faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell } from "@fortawesome/free-solid-svg-icons";
library.add(faSmile, faImage, faSpinner, faEllipsisV, faUserPlus, faSignOutAlt, faTrash, faCaretDown, faUpload, faTimes, faBell)

function App() {
  return (
    <Router>
      <div className="App">
        {/* <h1>Club Management App</h1> */}
        <Switch>
          <ProtectedRoute exact path='/' component={Chat}/>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>

          <Route render={() => <h1>Page Not Found</h1>} />

        </Switch>
      </div>


    </Router>
  );
}

export default App;
