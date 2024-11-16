import React from "react";

const Header = () => {
  return (
    <header className="app-header">
      <h1>Employees</h1>
      <div className="user-info">
        <img
          src="https://robohash.org/user?set=set5"
          alt="User Avatar"
          className="user-avatar"
        />
        <span>Vaibhav Mhasange</span>
      </div>
    </header>
  );
};

export default Header;
