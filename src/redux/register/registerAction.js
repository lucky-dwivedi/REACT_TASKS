export const register = (name ,gender ,email , password) => {
    return {
      type: 'REGISTER',
      name: name,
      gender: gender,
      email: email,
      password: password
    };
  };
  
  /*export const logout = () => {
    return {
      type: 'LOGOUT'
    };
  };
  
  export const storeTokens = () => {
    return {
      type: 'STORE_TOKENS',
      access_token: accessToken,
    }
  }*/