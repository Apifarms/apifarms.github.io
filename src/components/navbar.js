import Link from 'gatsby-link'
import React from 'react';
import classNames from 'classnames';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

import MediaQuery from 'react-responsive';


const MobileOnly = props => <MediaQuery {...props} maxWidth={991} />

const DesktopOnly = props => <MediaQuery {...props} minWidth={992} />

export class OldNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  
  render(){
    const { siteTitle, links, currentPath } = this.props;

    return (
      <Navbar color="faded" expand="lg">

        <NavbarBrand href="/" className="mr-auto">
          {siteTitle}
        </NavbarBrand>

        <NavbarToggler onClick={this.toggleNavbar} />

        <Collapse isOpen={!this.state.collapsed} navbar>
          <Nav navbar className="ml-auto">
            {links.map( ({to, display}) => 
              <NavItem key={to}>
                <Link to={to}> {display} </Link>
              </NavItem>
            )}
          </Nav>
        </Collapse>

      </Navbar>
    );

    
  }
}

export const NavBar = props => {
  const { siteTitle, currentPath, links } = props;
  return (
    <nav className="navbar navbar-expand navbar-light flex-column flex-md-row bg-warning">
      <div className="container">
        <Link className="text-center" to="/">
          <h1 className="navbar-brand mb-0">{siteTitle}</h1>
        </Link>
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
          {links.map( ({to, display})=>
            <li className={classNames("nav-item", currentPath === to && 'active')}>
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
        <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
      </div>
    </nav>
    );

}