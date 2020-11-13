import React from 'react';
import { Link } from 'react-router-dom';


class Menu extends React.Component {
    
    render () {
    return (
        <> 
            <div className="row m-3">
              <div className="col-sm-5 m-3">
                  <Link className="bg-primary text-white p-2 " to='/user/register' > Register </Link>
              </div>
              <div className="col-sm-5 m-3">
                  <Link className="bg-primary text-white p-2 " to='/user/login'  > Login </Link>
              </div>
          </div>
        </>
    )
    }
}
export default Menu;

 