//import logo from './logo.svg';
//import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {connect} from 'react-redux';
//import {login} from '../redux';
import {register} from '../redux';

class Register extends React.Component {
  constructor()
    {
        super();
        this.state = {
            C:false,
            Java:false,
            Python:false,
            JavaScript:false,
            name:"",
            gender:"",
            email:"",
            category:"",
            password:"",
            cpassword:"",
            technology:[],
            contactnumber:"",
            baseImage:"",
            modalIsOpen:false,
            
            nameError:"",
            emailError:"",
            genderError:"",
            contactnumberError:"",
            categoryError:"",
            technologyError:"",
            baseImageError:"",
            passwordError:"",
            cpasswordError:"",
            _id: ''
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
        /*else if(this.state.email.indexOf("@")<1 || this.state.email.lastIndexOf(".")<this.state.email.indexOf("@")+2 || this.state.email.lastIndexOf(".")+2>=this.state.email.length){
            this.setState({ emailError:"Please enter a valid e-mail address !"})
        }
        else if(this.state.contactnumber.length===0){
            this.setState( { contactnumberError:"Mobie number is required to fill" })
        }
        else if(this.state.contactnumber.length!==0 && this.state.contactnumber.length!==10){
            this.setState( { contactnumberError:"Mobie number should be 10 digit number !" })
        }
        else if(isNaN(this.state.contactnumber)){
            this.setState( { contactnumberError:"Enter your valid mobile number !" })
        }*/
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
            //this.setState ({
                //modalIsOpen:true,
                //technology : Array.from(new Set(this.state.technology))

            //})
            this.name_array.push(this.state.name);  
            this.gender_array.push(this.state.gender);
            this.email_array.push(this.state.email);  
            //this.mobile_array.push(this.state.contactnumber);  
            //this.category_array.push(this.state.category); 
            //this.pic_array.push(this.state.baseImage); 
            this.password_array.push(this.state.password); 

            localStorage.setItem("name", JSON.stringify(this.name_array));
            localStorage.setItem("gender", JSON.stringify(this.gender_array));
            localStorage.setItem("email", JSON.stringify(this.email_array));
            localStorage.setItem("password", JSON.stringify(this.password_array));
            //localStorage.setItem("mobile", JSON.stringify(this.mobile_array));
            //localStorage.setItem("category", JSON.stringify(this.category_array));
            //localStorage.setItem("technology", JSON.stringify(this.technology_array));
            //localStorage.setItem("pic", JSON.stringify(this.pic_array));
            this.props.onRegister(this.state.name, this.state.gender, this.state.email, this.state.password);
            alert("Registration done");
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


const mapStateToProps = states => {
  return { 
    //isLoggedIn: states.isLoggedIn,
    //access_token: states.access_token, 
    email:states.email[0],

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (name ,gender ,email , password) => { dispatch(register(name ,gender ,email , password)); },
    //tokenStore: (accessToken) => { dispatch(storeTokens(accessToken)) },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Register);
