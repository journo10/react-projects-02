import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems.map((menu) => (
        <article key={menu.id} className="menu-item">
          <img src={menu.img} alt={menu.title} className="photo" />
          <div className="item-info">
            <header>
              <h4>{menu.title}</h4>
              <h4 className="price">$ {menu.price}</h4>
            </header>
            <p className="item-text">{menu.desc}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default Menu;
