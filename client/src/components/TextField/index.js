import React from "react";

function TextField({ name }) {
  return (
    <div>
      <h4>
        Hello, I'm <span className="name">{name}.</span>
      </h4>
    </div>
  );
}

export default TextField;
