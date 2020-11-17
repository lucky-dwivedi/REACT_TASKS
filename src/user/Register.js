//import logo from './logo.svg';
//import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
//import {connect} from 'react-redux';
//import {login} from '../redux';
//import {register} from '../redux';
import fire from '../config/fire';
//import createBrowserHistory from 'history lib createBrowserHistory';

//const history = createBrowserHistory({forceRefresh:true});

class Register extends React.Component {
  constructor()
    {
        super();
        this.state = {
            name:"",
            gender:"",
            email:"",
            category:"",
            password:"",
            cpassword:"",
            //technology:[],
            //contactnumber:"",
            //baseImage:"",
            //modalIsOpen:false,
            
            nameError:"",
            emailError:"",
            genderError:"",
            contactnumberError:"",
            categoryError:"",
            //technologyError:"",
            //baseImageError:"",
            passwordError:"",
            cpasswordError:"",
            // _id: ''
        }
    }

    valid() {
        if(!(this.state.name.length>=2 && this.state.name.length<=30)){
            this.setState({ nameError:"Name should between 2 to 30 character" })
        }
        else if (!this.state.name.match(/^[A-Z a-z]+$/)){
            this.setState({ nameError:"Name should be valid" })
        }
        /*else if(this.state.gender.length===0){
            this.setState( { genderError:"Gender is required to fill" })
        }*/
        else if(this.state.email.length===0){
            this.setState( { emailError:"Email is required to fill" })
        }
        else if(this.state.gender.length===0){
            this.setState( { genderError:"Gender is required to fill" })
        }
       else if(this.state.password.length===0){
            this.setState( { passwordError:"Password is required to fill" })
        }
        else if(this.state.cpassword.length===0){
            this.setState( { cpasswordError:"Enter Password Again" })
        }
        else if(this.state.password!==this.state.cpassword){
            this.setState( { cpasswordError:"Password and Confirm Password should be same" })
        }
        else {
            return true;
        }
    }

    name_array=[];
    gender_array=[]
    email_array=[];
    password_array=[];
    //category_array=[];
    //technology_array=[];
    //uniquetechnology="";
    //pic_array=[]; 

    submit() {
        
        this.setState ({
            nameError:"",
            emailError:"",
            genderError:"",
            //contactnumberError:"",
            //categoryError:"",
            //technologyError:""
            passwordError:"",
            cpasswordError:""
        })
        if(this.valid())
        {
            
              fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
                console.log(u);
                alert("Registration done");
                //history.push("/user/home");
            }).catch((err)=>{
                console.log(err)
            });
            //alert("Registration done");
        }
      
        
    }
  render(){
  return (
    <>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input type="text" className="form-control" placeholder="Name" onChange = {(event) => { this.setState({ name:event.target.value })}} />
              <small className="text-danger" >{this.state.nameError}</small>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input type="email" className="form-control" placeholder="Email" onChange = {(event) => { this.setState({ email:event.target.value })}}/> 
              <small className="text-danger" >{this.state.emailError}</small>          
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Gender</label>
            <div className="col-sm-10">
              <select className="custom-select" onChange = {(event) => { this.setState({ gender:event.target.value })}}> 
                <option  value=""> Select Gender</option>
                  <option  value="Male"> Male</option>
                  <option  value="Female"> Female</option>
                  <option  value="Other"> Other</option>
              </select>
              <small className="text-danger" >{this.state.genderError}</small> 
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
            <label className="col-sm-2 col-form-label">Confirm Password</label>
            <div className="col-sm-10">
              <input type="password" className="form-control" placeholder="Confirm Password" onChange = {(event) => { this.setState({ cpassword:event.target.value })}}/> 
              <small className="text-danger" >{this.state.cpasswordError}</small>           
            </div>
          </div>

          <div className="form-group row">
            <div className="col-sm-10">
              <button onClick = {() => this.submit()} className="btn btn-primary" >Submit</button> 
            </div>
          </div>


    </>
  )}
}



export default Register;
