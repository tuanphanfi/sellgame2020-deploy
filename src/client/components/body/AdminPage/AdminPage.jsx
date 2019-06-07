import React, { PureComponent } from "react";
import AdminSideBar from "./AdminSideBar";
import AddNews from "./AddNews"

class AdminPage extends PureComponent {
  state = {};
  render() {
    return (
      <div id="admin-component">                
        <AdminSideBar />             
        <AddNews />                
      </div>
    );
  }
}

export default AdminPage;
