import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuDrawer() {
  const MenuDrawer = () => {
    const [navShow, setNavShow] = useState(false);

    const onToggleNav = () => {
      setNavShow((status) => {
        if (status) {
          document.body.style.overflow = "auto";
        } else {
          // Prevent scrolling
          document.body.style.overflow = "hidden";
        }
        return !status;
      });
    };


<div className="flex items-center justify-between border-b border-gray-400 py-8">
      <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div>
            <div
              className="absolute top-0 right-0 px-8 py-8"
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <List>
        <ListItem>
          <Link to="/users">Home</Link>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Link to="/users/1">Usuários</Link>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Link to="/users">Criar Post</Link>
        </ListItem>
      </List>
          </div>
        </section>

        <List>
        <ListItem>
          <Link to="/users">Home</Link>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Link to="/users/1">Usuários</Link>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <Link to="/users">Criar Post</Link>
        </ListItem>
      </List>
      </nav>
    </div>