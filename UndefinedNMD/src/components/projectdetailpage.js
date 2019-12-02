import React, { Component } from "react";
import Layout from "../components/layout"
import "../styles/projectdetail.css"
import SEO from "../components/seo"
import Menu from '../components/menu'

class ProjectDetailPage extends Component {

  state = {
    navActive: false,
  }

  getNavState = () => {
    this.setState(state => ({ navActive: !state.navActive }));
    console.log('State change ! ! ! ');
  }

  render() {
    return (
      <Layout>
        <SEO title="Assignments" />
        <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
        <div className="fixed-div">
          <div className="toggle-nav reduce-width-float" onClick={this.getNavState}>
            <div className="nav-line-top"></div>
            <div className="nav-line-bottom"></div>
          </div>
        </div>
        <div className="header-container">
          <div className={"hero-img-detail"}>
            <h1 className="project-title-detail">{this.props.projecttitle}</h1>
            <div className={"subtitles-detail"}>
              <h5 className={"subtitle-text-detail"}>By undefined</h5>
              <div className={"line-detail"}></div>
              <h5 className={"date-text-detail"}>2019</h5>
            </div>
          </div>
        </div>
        <div className="main-container">
          <p className="project-intro">
            {this.props.projectsynopsis}
          </p>
          <div className="content-box">
            <h3 className="project-subtitle">Visual identity</h3>
            <p className="project-text">
              {this.props.projectbody}
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
          <div className="contact-action">
            <p className="action-title">Let us define your next project</p>
            <a href="/contact" className="action-button">Contact us</a>
          </div>
          <footer>
            <div className="footer-container-left">
              <h2>Contact</h2>
              <ul>
                <li className="footer-info-general">Hoogpoort 15</li>
                <li className="footer-info-general">9000 Gent</li>
                <li><a className="footer-info-general" href="mailto:info@arteveldehs.be">info@arteveldehs.be</a></li>
                <li><a className="footer-info-general" href="tel:03292348600">09 234 86 00</a></li>
              </ul>
            </div>
            <div className="footer-container-center">
              <h2>Socials</h2>
              <ul>
                  <li><a className="footer-info-general" target="blanc" href="https://www.instagram.com/undefinednmd/">Instagram </a></li>
                  <li><a className="footer-info-general" target="blanc" href="https://www.facebook.com/undefinednmd/"> Facebook </a></li>
                  <li><a className="footer-info-general" target="blanc" href="https://www.linkedin.com/in/undefined-nmd-122144194/"> LinkedIn </a></li>
                  <li><a className="footer-info-general" target="blanc" href="https://www.twitter.com/UNDEFIN78240322"> Twitter</a></li>
              </ul>
            </div>
            <div className="blank"></div>
            <div className="undefined-copyright">_defined</div>
          </footer>
        </div>
      </Layout>
    )
  }
}

export default ProjectDetailPage
