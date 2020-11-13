const defaultState = {
    
    isLoggedIn: false,
    email: [],
    ema:'',
    password: '',
    access_token: ''
  };
  
  export default function reducer(states = defaultState, action) {
    switch (action.type) {
      case 'LOGIN': 
          return Object.assign({}, states, { 
              //isLoggedIn: true,
              //email:action.email,
              //ema: action.email,
              email:[...states.email,action.email]
              //email:states.email,
              //email: [...states.email],
              //email:states.email.push(this.ema),
              //register:[...states.register,action.payload]
              //password: action.password
          });
      case 'LOGOUT':
          return Object.assign({}, states, { 
              isLoggedIn: false,
              email: '',
              password: ''
          });
      case 'STORE_TOKENS':
          return Object.assign({}, states, {
              access_token: action.accessToken,
          })
      default:
          return states;
    }
  }