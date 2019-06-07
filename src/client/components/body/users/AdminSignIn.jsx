import React, { Component } from 'react';
class AdminSignIn extends Component {
    render() { 
        return (  
            <div id="enrollment-component">
                <h2>Sign In</h2> 
                    <form action = "/signin" method = "POST">
                        <div className="input-group">
                            <span className="input-group-addon" id="icon"><i className='fas fa-user-circle'></i></span>
                            <input type="text" className="form-control" name="username" placeholder="Username" required/>                    
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon" id="icon"><i className='fas fa-key'></i></span>
                            <input type="password" className="form-control" name="password" placeholder="Your Password" required/>
                        
                            <span className="input-group-addon" id="icon" ><i className="material-icons">https</i></span>
                        </div>
                        <input id="enroll-button" type="submit" value="SIGN IN" />                                
                    </form>                          
            </div>
        ); 
    }
}
 
export default AdminSignIn;