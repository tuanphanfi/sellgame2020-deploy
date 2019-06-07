import React, { Component } from 'react';
class Enrollment extends Component {
    render() { 
        return (  
            <div id="enrollment-component">
                <h3>Enrollment</h3>
                {/* <form> */}
                    <div className="input-group">
                        <span className="input-group-addon" id="icon"><i className='fas fa-user'></i></span>
                        <input type="text" className="form-control"  name="fullname" placeholder="Full name"/>
                    
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="icon"><i className='fas fa-envelope'></i></span>
                        <input type="text" className="form-control" name="email" placeholder="Email"/>
                    
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="icon"> <i className='fas fa-mobile-alt'></i></span>
                        <input type="text" className="form-control" name="phone" placeholder="Phone number"/>
                   
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="icon"><i className='fas fa-user-circle'></i></span>
                        <input type="text" className="form-control" name="username" placeholder="Username"/>
                    
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="icon"><i className='fas fa-key'></i></span>
                        <input type="text" className="form-control" name="password" placeholder="Password"/>
                    
                        <span className="input-group-addon" id="icon"><i className="material-icons">https</i></span>
                    </div>
                    <div className="input-group">
                        <span className="input-group-addon" id="icon"><i className='fas fa-key'></i></span>
                        <input type="text" className="form-control" name="retype-password" placeholder="Retype password"/>
                    
                    </div>

                    <button id="enroll-button">CREATE</button>
                    {/* <button id="enroll-button" type="submit">CREATE</button> */}
                {/* </form> */}
            </div>
        );
    }
}
 
export default Enrollment;