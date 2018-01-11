import Link from 'gatsby-link'
import React from 'react';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';
import './sidebar.scss';
import beeImage from './bee-icon.svg';


const MobileOnly = props => <MediaQuery {...props} maxWidth={991} />

const DesktopOnly = props => <MediaQuery {...props} minWidth={992} />

export const Sidebar = props => {
  const { siteTitle, currentPath, links, } = props;
  return (
    <div className="card sidebar-card" 
      style={{
        borderColor:"transparent",
        backgroundColor: "inherit",
      }}
    >
      <img
        className="sidebar-main-image"
        aria-hidden
        src={beeImage}
      />
      <div className="card-block">
        <Link 
          to={"/"}
          style={{
            color: "inherit",
            textDecoration: "none",
          }}
        >
          <header className="h4 card-title sidebar-title">
            {siteTitle}
          </header>
        </Link>
        <p className="card-text"></p>
      </div>
      <ul className="list-group list-group-flush">
        {links.map( ({to, display})=>
          <li className="list-group-item list-group-item--sidebar">
            <Link 
              to={to}
              className="nav-link"
            >
              {display}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );

}