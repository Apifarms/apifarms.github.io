import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get';
import { NavBar } from '../components/navbar.js';
import { SideBar, Sidebar } from '../components/sidebar.js';
import 'bootstrap/dist/css/bootstrap.css';

import "./index.scss";

class Template extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')


    const { location, children } = this.props
    let header;

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    header = (
      <NavBar 
        currentPath={location.pathname}
        siteTitle={siteTitle}
        links={[
          {to: "/about", display : "About"},
          {to: "/services", display: "Services"},
        ]}
      />
    )

    return (
      <div style={{minHeight:"inherit"}}>
        <div className="row no-gutters" style={{minHeight:"inherit"}}>
          <div className="col-lg-4 sidebar-col" 
            style={{display: "flex"}}
          >
            <div className="sidebar-container">
              <Sidebar
                siteTitle={siteTitle}
                links={[
                  {
                    to: "/host-a-hive",
                    display: "Host a hive",
                  },
                  {
                    to: "/seeds",
                    display: "Flower seeds",
                  },
                  {
                    to: "/bee-catching",
                    display: "Bee catching services",
                  },
                  {
                    to: "/about",
                    display:"About us",
                  },
                  {
                    to: "/contact",
                    display: "Contact us!"
                  }
                ]}
              />
            </div>
          </div>
          <div className="col-lg-8 main-content-col">
          <main 
            style={{
              padding: "40px 15px 0"
            }}
          >
            {children()}
          </main>    
          </div>
        </div>
      </div>
    )
  }
}

export const query = graphql`
query LayoutQuery {
  site {
    siteMetadata {
      title
    }
  }
}
`

export default Template
