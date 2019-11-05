import React from "react";

const Header = props => {
  return (
    <section className="header">
      <div className="image-container">
        <img src={props.photo} alt="logo" />
      </div>
    </section>
  );
};

export default Header;
