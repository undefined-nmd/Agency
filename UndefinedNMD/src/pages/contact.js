import React, { Component } from "react";
import Layout from "../components/layout"
import Menu from '../components/menu'
import "../styles/contact.css"
import "../styles/index.css"
import SEO from "../components/seo"
import axios from "axios";

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        message: ''
      },
      formActive: false,
      navActive: false,
      formSent: false
    }
    this.handleChange = this.handleChange.bind(this);
  }


  getFormState = () => {
    this.setState(state => ({ formActive: !state.formActive }));
    console.log(this.state.formActive);
  }

  getNavState = () => {
    this.setState(state => ({ navActive: !state.navActive }));
    console.log(this.state.navActive);
  }

  handleChange = (e, property) => {
    this.setState({
      formData: {
        ...this.state.formData,
        [property]: e.target.value,
      }
    })
    console.log(this.state.formData)
  }

  submitForm = () => {
    axios.post('https://undefined-baas.firebaseapp.com/api/contact', this.state.formData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      formActive: false,
      formSent: true,
    })
  }

  render() {
    const showHideForm = {
      showForm: 'show-form-div',
      hideForm: 'hide-form-div'
    };

    let formState = this.state.formActive;

    return (
      <Layout>
        <SEO title="Contact" />
        <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
        <div className={'contact-container'}>
          <div className="toggle-nav reduce-width-float pos-right-abs" onClick={this.getNavState}>
            <div className="nav-line-top"></div>
            <div className="nav-line-bottom"></div>
          </div>
          <div className={'contactinfo'}>
            <div className={'contactinfo-contact'}>
              <h2 className="contact-h2">Contact</h2>
              <div>
                <a className="contact-p" href="mailto:info@arteveldehs.be">info@arteveldehs.be </a><span className="contact-p span-slash">/</span>
                <a className="contact-p" href="tel:003292348600"> 09 234 86 00</a>
              </div>
            </div>
            <div className={'contactinfo-social'}>
              <h2 className="contact-h2">Social</h2>
              <div>
                <a className="contact-p" target="blanc" href="https://www.instagram.com/undefinednmd/">Instagram </a><span className="contact-p span-slash">/</span>
                <a className="contact-p" target="blanc" href="https://www.facebook.com/undefinednmd/"> Facebook </a><span className="contact-p span-slash">/</span>
                <a className="contact-p" target="blanc" href="https://www.linkedin.com/in/undefined-nmd-122144194/"> LinkedIn </a><span className="contact-p span-slash">/</span>
                <a className="contact-p" target="blanc" href="https://www.twitter.com/UNDEFIN78240322"> Twitter</a>
              </div>
            </div>
            <div className={'contactinfo-general'}>
              <p>Hoogpoort 15</p>
              <p>9000 Gent</p>
              <p>ONnr: 0474.120.360</p>
              <p>BTWnr: BE 0474.120.360</p>
            </div>
          </div>
          <div className={'rightside-title'}>
            {/* <h1>Contact</h1> */}
          </div>
          <div className={'rightside-button'}>
            <p className="action-button-contact-page add-btn-padding" onClick={this.getFormState}>{this.state.formSent ? 'Message Sent!' : 'Your question?'}</p>
          </div>
        </div>
        <div className={'rightside-logo'}>
        </div>
        <a href="/#" className="undefined-copyright-contact">_defined</a>
        <div className={formState ? showHideForm.showForm : showHideForm.hideForm}>
          <form>
            <h3 className="project-subtitle">Ask us anything</h3>
            <div className="close-form" onClick={this.getFormState}>
              <div className="close-nav-top"></div>
              <div className="close-nav-bottom"></div>
            </div>
            <input type="text" placeholder="Name" onChange={(e) => this.handleChange(e, 'name')} className="question-form-input con-form-name-val" />
            <input type="email" placeholder="Email" onChange={(e) => this.handleChange(e, 'email')} className="question-form-input" />
            <textarea type="text" rows="4" cols="50" placeholder="Your message" onChange={(e) => this.handleChange(e, 'message')} className="question-form-input question-form-textarea" />
            <p className="action-button-contact-page center-action-btn" onClick={this.submitForm}>Send</p>
          </form>
        </div>
      </Layout>
    );
  }
}

export default ContactPage
