import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import "../components/index.css"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <div className={'container'}>
          <div className={'hero-img'}>
              <div className={'hero-child'}>
                  <h1 className="project-title">Snek the museum</h1>
                  <div className={'subtitles'}>
                      <h5 className={'subtitle-text'}>View project</h5>
                      <div className={'line'}></div>
                      <h5 className={'date-text'}>2019</h5>
                  </div>
              </div>
          </div>
          <div className={'content-div'}>
              <div className={'content-child'}>
                  <div className="toggle-nav">
                      <div className="nav-line-top"></div>
                      <div className="nav-line-bottom"></div>
                  </div>
                    <h2 className="brand-title">_defined</h2>
                    <h4 className="baseline">We <span>Build</span> <span>Digital</span> <span>Stuff</span></h4>
              </div>
          </div>
      </div>
  </Layout>
)

export default IndexPage
