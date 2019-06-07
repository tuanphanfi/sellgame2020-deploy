import React, { PureComponent } from "react";

class AdminSideBar extends PureComponent {
  state = {};
  render() {
    return( 
        <div className="admin-content" id="admin-sidebar">            
          <ul>
            <li><a href="/addnews"><h3>Add News</h3></a></li>
            <li><a href="/editnews"><h3>Edit News</h3></a></li>
            <li><a href="/awaitingnews"><h3>Awaiting News</h3></a></li>
            <li><a href="#"><h3>History</h3></a></li>
          </ul>            
        </div>
    )
  }
}

export default AdminSideBar;
