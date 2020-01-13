import React, { Component } from "react";
import Layout from "../components/layout"
import Footer from "../components/footer"
import "../styles/projectdetail.css"
import SEO from "../components/seo"
import Menu from '../components/menu'

class ProjectDetailPage extends Component {
  state = {
    navActive: false,
    heroStyle: {
      backgroundImage: `url(${this.props.projectimages[0]})`
    }
  }

  getNavState = () => {
    this.setState(state => ({ navActive: !state.navActive }));
  }

  componentDidMount() {
    console.log(this.props)
    console.log(this.state.heroStyle)
  }

  render() {
    // TODO Make the nav more component-ish
    return (
      <Layout>
        <SEO title="Assignments" />
        <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
        <div className="fixed-div">
          <div className="toggle-nav reduce-width-float" onClick={this.getNavState}>
            <div className="toggle-nav-child-cont">
              <div className="nav-line-top"></div>
              <div className="nav-line-bottom"></div>
            </div>
          </div>
        </div>
        <div className="header-container">
          <div className={"hero-img-detail"} style={this.state.heroStyle}>
            <h1 className="project-title-detail">{this.props.projecttitle}</h1>
            <div className={"subtitles-detail"}>
              <h5 className={"subtitle-text-detail"}>By undefined</h5>
              <div className={"line-detail"} />
              <h5 className={"date-text-detail"}>2019</h5>
            </div>
          </div>
        </div>
        <div className="main-container">
          <p className="project-intro">
            {this.props.projectsynopsis}
          </p>
          <div className="content-box">
            <h3 className="project-subtitle">{this.props.projecttitle}</h3>
            <p className="project-text">
              {this.props.projectbody}
            </p>
          </div>
        </div>
        <div className="image-container">
          {/*TODO Catch 'no images in firestore'*/}
          {this.props.projectimages.map((image, key) =>
            <img
              src={image}
              alt=""
              key={key}
              className="project-image-sm"
            />
          )}
        </div>
        <div className="main-container">
          <div className="contact-action">
            <p className="action-title">Let us define your next project</p>
            <a href="/contact" className="action-button-page-section">Contact us</a>
          </div>
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default ProjectDetailPage
