import React from "react";

const Synopsis = props => {
  return (
    <section className="synopsis">
      <h1 className="synopsis-title">SYNOPSIS ET DETAILS</h1>
      <p className="synopsis-resume">{props.resume}</p>
    </section>
  );
};

export default Synopsis;
