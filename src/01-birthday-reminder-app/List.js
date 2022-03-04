import React from "react";

const List = ({ footballer }) => {
  return (
    <div>
      {footballer.map((footbal) => (
        <article key={footbal.id} className="person">
          <img src={footbal.image} alt={footbal.name} />
          <div>
            <h4>{footbal.name}</h4>
            <p>{footbal.age} years</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default List;
