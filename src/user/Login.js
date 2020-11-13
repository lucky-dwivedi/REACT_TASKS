//import logo from './logo.svg';
//import './App.css';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import {connect} from 'react-redux';
//import {login} from '../redux/loginAction';
//import {login} from '../redux';
import {register} from '../redux';

class Login extends React.Component {
  constructor()
    {
        super();
        this.state = {
            email:"",
            password:"",
            email_array:[],
            password_array:[],
            emailError:"",
            passwordError:"",
            login:false
        }
    }

    componentWillMount(){
    
        this.setState({
            //email_array :localStorage.getItem('email') ? JSON.parse(localStorage.getItem('email')) : [],
            //password_array :localStorage.getItem('password') ? JSON.parse(localStorage.getItem('password')) : [],
             
        })
    
     }
    

    valid() {
        if(this.state.email.length===0){
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
            
            //console.log(this.props.email);
            //console.log(this.state.email_array);
            //console.log(this.state.email_array[0]);
            //console.log(this.state.email_array.indexOf(this.state.email));
            //this.props.onLogin(this.state.email, this.state.password);
            //this.a=this.state.email_array.indexOf(this.state.email);
            //this.b=this.state.password_array.indexOf(this.state.password)
            this.a=this.props.email.indexOf(this.state.email);
            this.b=this.props.email.indexOf(this.state.password)
            if(this.a===-1){
                alert("emailID doesn't exist");
            }
            else if(this.a!==this.b){
                alert("email or password is wrong")
            }
            else{
                this.setState ({
                  login:true
                })
                alert("Login Successfull");

                //alert(this.props.email)
            }
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
              <h2>Registered Users are</h2>
            {this.props.email.map(email => (
              <li>
                {email}
              </li>
            ))}
          </div>
          : ''}
    </>
  )}
}



const mapStateToProps = states => {
  return { 
    //isLoggedIn: states.isLoggedIn,
    //access_token: states.access_token, 
    email:states.email,
    password:states.password,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegister: (name ,gender ,email , password) => { dispatch(register(name ,gender ,email , password)); },
    //tokenStore: (accessToken) => { dispatch(storeTokens(accessToken)) },
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);

