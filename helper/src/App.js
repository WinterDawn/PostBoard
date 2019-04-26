import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import NavBar from './components/NavBar'
import QuestionPage from './components/QuestionPage';
import HomePage from './components/HomePage';

import Register from './components/Register';
import Login from './components/Login';
import Profile from './components/Profile'

class App extends Component{
  state = {
    questions:[],
    user:{
      questionID:'', 
      question:"",
      answer:""
    },
  }

  /*
    get questions list from database before render
   */
  componentWillMount() {
    fetch('http://localhost:4000/user')
      .then(response => response.json())
      .then(response => localStorage.setItem('questionlist', JSON.stringify(response.data)))
      .catch(err => console.error(err))
    console.log(localStorage.getItem('questionlist'))
  }

  /*
    combine all components
    also work as front end routers
   */
  render() {
    return (
      <Router>
        <div>
          <NavBar/>          
          <div>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={HomePage} />

            <Route path="/question/:quesid" render={(props) => <QuestionPage id={props.match.params.quesid} />} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
