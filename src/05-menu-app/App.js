import React, { useState } from "react";
import "./App.css";
import data from "./data";
import Categories from "./components/Categories";
import Menu from "./components/Menu";

const allCategories = ["all", ...new Set(data.map((dt) => dt.category))]; //var olan category üzrinde map yapıp tüm category gelmesi için syaptık. //new Set() =>constructor bak.

const App = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItemsCategory = (category) => {
    if (category === "all") {
      //tüm ürünlerin gelmesi için
      setMenuItems(data);
      return;
    }
    const newItems = data.filter((i) => i.category === category);
    setMenuItems(newItems);
  };
  return (
    <menu>
      <section className="menusection">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories
          filterItemsCategory={filterItemsCategory}
          categories={categories}
        />
        <Menu menuItems={menuItems} />
      </section>
    </menu>
  );
};

export default App;
