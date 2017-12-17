import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get';
import { NavBar } from '../components/navbar.js';

import 'bootstrap/dist/css/bootstrap.css';

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
      <div>
        {header}
        <div className="container">
          <main 
            style={{
              padding: "40px 15px 0"
            }}
          >
            {children()}
          </main>
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
