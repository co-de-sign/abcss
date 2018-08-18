import React from 'react'
import Link from 'gatsby-link'

import AbcssName from '../components/abcss-name'

import './index.scss'

const HomePage = () => (
  <main className="home-page">
    <AbcssName />

    <section className="description">
      <p>
        ABCSS is a way to organize the style rules in three directories. This directories are
        `ambience`, `base` and `components` (hence the name).
      </p>
      <p>
        <Link to="/content">Find out what goes where</Link>
      </p>
    </section>
  </main>
)

export default HomePage
