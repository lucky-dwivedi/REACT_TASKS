import {createStore} from 'redux';

//import reducer from './login/loginReducer';
//const store=createStore(reducer);

import reducer from './register/registerReducer';
const store=createStore(reducer);
export default store;
