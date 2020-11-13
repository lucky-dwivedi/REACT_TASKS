const defaultState = {
    
    //isLoggedIn: false,
    name:[],
    gender:[],
    email: [],
    //ema:'',
    password: [],
    //access_token: ''
  };
  
  export default function reducer(states = defaultState, action) {
    switch (action.type) {
      case 'REGISTER': 
          return Object.assign({}, states, { 
              //isLoggedIn: true,
              //email:action.email,
              //ema: action.email,
              name:[...states.name,action.name],
              gender:[...states.gender,action.gender],
              email:[...states.email,action.email],
              password:[...states.password,action.password]
              //email:states.email,
              //email: [...states.email],
              //email:states.email.push(this.ema),
              //register:[...states.register,action.payload]
              //password: action.password
          });
      /*case 'LOGOUT':
          return Object.assign({}, states, { 
              isLoggedIn: false,
              email: '',
              password: ''
          });
      case 'STORE_TOKENS':
          return Object.assign({}, states, {
              access_token: action.accessToken,
          })*/
      default:
          return states;
    }
  }