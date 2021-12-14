import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import  LoginPage  from './pages/login'
import  RegisterPage  from './pages/register'
import  ChangePassword2  from './pages/change-password2'
import  ChangePassword1  from './pages/change-password1'
import  HomePage  from './pages/home'
import  Course  from './pages/course'
import  Live  from './pages/live'

function App() {
  return (
      <Router>
       <Switch>
          <Route path="/login">
            <LoginPage/>
          </Route>
          <Route path="/register">
            <RegisterPage/>
          </Route>
          <Route path="/change-password2">
            <ChangePassword2/>
          </Route>
          <Route path="/change-password1">
            <ChangePassword1/>
          </Route>
          <Route path="/course">
            <Course/>
          </Route>
          <Route path="/live">
            <Live/>
          </Route>
          <Route exact path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>

      
    
  )
}

export default App;
