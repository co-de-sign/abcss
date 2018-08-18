import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../base/normalize.scss'
import '../base/typography.scss'

const DefaultLayout = ({ children, data }) => (
  <div className="default-layout">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'ABC Style Structure' },
        { name: 'keywords', content: 'scss, css, framework, style, stylesheet' },
      ]}
    />
    {children()}
  </div>
)

DefaultLayout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.shape({
    site: {
      siteMetadata: {
        title: PropTypes.string,
      },
    },
  }),
}

DefaultLayout.defaultProps = {
  children: () => null,
  data: {},
}

export default DefaultLayout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
