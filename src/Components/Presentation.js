import React from "react";

const Presentation = props => {
  return (
    <section className="presentation">
      <div className="poster">
        <img src={props.poster} alt="poster" />
      </div>
      <div className="infos">
        <p className="date">
          Date de sortie{" "}
          <a href=" " style={{ fontWeight: "bold" }}>
            {props.date}
          </a>
          <span style={{ color: "black", fontWeight: "bold" }}>
            {props.length}
          </span>
        </p>
        <p className="director">
          De <a href=" ">{props.director}</a>
        </p>
        <p className="actors">
          Avec <a href=" ">{props.actors}</a>
        </p>
        <p className="genre">
          Genre <a href=" ">{props.genre}</a>
        </p>
        <p className="country">
          Nationalites <a href=" ">{props.country}</a>
        </p>
      </div>
    </section>
  );
};

export default Presentation;
