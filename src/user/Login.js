//import logo from './logo.svg';
//import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
//import {connect} from 'react-redux';
//import {login} from '../redux/loginAction';
//import {login} from '../redux';
//import {register} from '../redux';
import fire from '../config/fire';
import Home from './Home';

class Login extends React.Component {
  constructor()
    {
        super();
        this.state = {
            email:"",
            password:"",
            //email_array:[],
            //password_array:[],
            emailError:"",
            passwordError:"",
            //searchuname:"",
            login:false
        }
    }

    valid() {
        if(this.state.email.length===0){
            this.setState( { emailError:"Email is required to fill" })
        }
        else if(this.state.password.length===0){
            this.setState( { passwordError:"Password is required to fill" })
        }
        else {
            return true;
        }
    }
    a="";
    b="";
    submit() {
        
        this.setState ({
            emailError:"",
            passwordError:"",
            
        })
        if(this.valid())
        {
            
            fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
                  console.log(u);
                  this.setState ({
                    login:true
                  })
                  
                  
              }).catch((err)=>{
                   console.log(err);
                   alert("Something went wrong");
              });
                

        }
      
        
    }
  render(){
  return (
    <>
         
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" placeholder="Email" onChange = {(event) => { this.setState({ email:event.target.value })}}/> 
              <small className="text-danger" >{this.state.emailError}</small>          
            </div>
          </div>

          
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" placeholder="Password" onChange = {(event) => { this.setState({ password:event.target.value })}}/> 
              <small className="text-danger" >{this.state.passwordError}</small>           
            </div>
          </div>

          

          <div className="form-group row">
            <div className="col-sm-10">
              <button onClick = {() => this.submit()} className="btn btn-primary" >Submit</button> 
            </div>
          </div>

          

          {this.state.login ? 
            <div>
              <Home/>
          </div>
          : ''}

          
    </>
  )}
}




export default Login;

