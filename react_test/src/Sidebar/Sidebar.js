import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/Games">
        Games
      </a>

      <a className="menu-item" href="/GamesNews">
        Games News
      </a>

      <a className="menu-item" href="/payment">
        Payment
      </a>
      
    </Menu>
  );
};

export default Sidebar;