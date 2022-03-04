import React from "react";

const Categories = ({ categories, filterItemsCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((c,key) => (
        <button
          type="button"
          className="filter-btn"
          key={key}
          onClick={() => filterItemsCategory(c)}
        >
          {c}
        </button>
      ))}
    </div>
  );
};

export default Categories;
