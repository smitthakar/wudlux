import React from "react";

const home = () => {
  return (
    <div>
      <nav className="navigation">
        <div className="nav-logo"></div>
        <ul className="nav-links">
          <li>
            <a href="#">Serveware</a>
          </li>
          <li>
            <a href="#">Kitchenware</a>
          </li>
          <li>
            <a href="#">Tableware</a>
          </li>
          <li>
            <a href="#">Collections</a>
          </li>
        </ul>
        <div className="nav-sale">
          <span>
            Summer sale – <strong>50% OFF!</strong> <a href="#">Shop Now</a>
          </span>
        </div>
        <div className="nav-icons">
          <span className="icon">
            <img src="/src/assets/Bag 1.png" alt="" />
          </span>
          <span className="icon">
            <img src="profile1.png" alt="" />
          </span>
          <div className="icon cart">
            <span className="cart-badge"></span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default home;
