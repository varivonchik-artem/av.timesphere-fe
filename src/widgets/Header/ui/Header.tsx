import React from "react";

import "./Header.scss";

import clx from "classnames";
import { NavLink } from "react-router-dom";
import Square from "@/shared/assets/images/square.svg";
import { Button } from "@/shared/ui/Button";

interface MenuItem {
  label: string;
  href: string;
}

export function Header(): React.ReactElement {
  const menuItems: MenuItem[] = [
    { label: "Home", href: "/" },
    { label: "News", href: "/news" },
    { label: "About us", href: "/about" },
  ];

  return (
    <header className="header">
      <div className="header__inner container">
        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map((item, index) => (
              <li key={index} className="header__menu-item">
                <NavLink
                  to={item.href}
                  className={({ isActive }) => clx("header__menu-link", { "header__menu-link--active": isActive })}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="header__actions">
          <Button className="header__button" label="Account" icon={Square} />
        </div>
      </div>
    </header>
  );
}
