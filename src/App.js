import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Modal from 'react-modal';
import { Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import Register from './user/Register';
import Login from './user/Login';
import Home from './user/Home';
import fire from './config/fire';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

Modal.setAppElement('#root')
class App extends Component {

  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount(){
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){return (
    <Provider store={store}>
    <div className="jumbotron">
      <div className="container bg-white">
        <Menu/>
      <Switch>
          <Route path = "/user/register" component = { Register } />
          <Route path = "/user/login" component = { Login  } />
          
        </Switch>
      
        

      </div>
    </div> 
    
    </Provider>
  );}
}

export default App;
