import Link from 'gatsby-link'
import React from 'react';
import classNames from 'classnames';
import MediaQuery from 'react-responsive';
import './sidebar.scss';
//import beeImage from './bee-icon.svg';
import beeImage from './apifarms-logo.gif';


const MobileOnly = props => <MediaQuery {...props} maxWidth={991} />

const DesktopOnly = props => <MediaQuery {...props} minWidth={992} />

export const Sidebar = props => {
  const { siteTitle, currentPath, links, } = props;
  return (
    <div className="card sidebar-card" 
      style={{
        borderColor:"transparent",
        //backgroundColor: "rgba(255,187,17,0.1)",
        backgroundColor:"transparent",
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
          <header 
            className="card-title sidebar-title"
            style={{
              fontWeight: 300
            }}
          >
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