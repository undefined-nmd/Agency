import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/projects.css"
// import Image from "../components/image"
import SEO from "../components/seo"

const ProjectDetailPage = () => (
  <Layout>
    <SEO title="Assignments" />
    <div className="header-container">
      <div className={"hero-img-detail"}>
        <h1 className="project-title-detail">Snak the museum</h1>
        <div className={"subtitles-detail"}>
          <h5 className={"subtitle-text-detail"}>By undefined</h5>
          <div className={"line-detail"}></div>
          <h5 className={"date-text-detail"}>2019</h5>
        </div>
      </div>
      <nav>
        <a href="">Team</a>
        <a href="">Contact</a>
        <a href="">About</a>
        <a href="">Projects</a>
      </nav>
    </div>
    <div className="main-container">
      <p className="project-intro">
        A brief intro about the project comes here. A brief intro about the
        project comes here. A brief intro about the project comes here.
      </p>
      <div className="content-box">
        <h3 className="project-subtitle">Visual identity</h3>
        <p className="project-text">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn’t anything embarrassing hidden in the middle of text.
        </p>
      </div>
    </div>
    <div className="image-container">
      <img
        src={require("../images/tumblr_n7jz4u5Fgd1ql2g28o1_500.jpg")}
        alt=""
        className="project-image-sm"
      />
      <img
        src={require("../images/tumblr_n7jz4u5Fgd1ql2g28o1_500.jpg")}
        alt=""
        className="project-image-sm"
      />
      <img
        src={require("../images/tumblr_n7jz4u5Fgd1ql2g28o1_500.jpg")}
        alt=""
        className="project-image-sm"
      />
      <img
        src={require("../images/tumblr_n7jz4u5Fgd1ql2g28o1_500.jpg")}
        alt=""
        className="project-image-sm"
      />
    </div>
    <div className="main-container">
    <div className="content-box">
        <h3 className="project-subtitle">Services</h3>
        <ul className="project-text">
          <li>Brand identity</li>
          <li>UI / UX design</li>
          <li>Visual design</li>
          <li>Development</li>
        </ul>
      </div>
      <div className="contact-action">
        <p className="action-title">Let us define your next project</p>
        <a href="" className="action-button">Contact us</a>
      </div>
    </div>
  </Layout>
)

export default ProjectDetailPage
