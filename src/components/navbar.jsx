import React from "react";

const Navbar = ({ totalCount }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-brand">
          Total count{" "}
          <span className="badge badge-pill badge-secondary">{totalCount}</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
