import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import "../styles/index.css"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
      <div className={'container'}>
          <div className={'contactinfo'}>
            <div className={'contactinfo-contact'}>  
                <h2>Contact</h2>
                <p>info@arteveldehs.be / 09 234 86 00</p>
            </div>
            <div className={'contactinfo-social'}> 
                <h2>Social</h2>
                <p>Instagram / Facebook / LinkedIn / Twitter</p> 
            </div>
            <div className={'contactinfo-general'}> 
            <p>Hoogpoort 15</p>
            <p>9000 Gent</p>
            <p>ONnr: 0474.120.360</p>
            <p>BTWnr: BTW BE 0474.120.360</p> 
            </div>
          </div>
          <div className={'rightside'}>
            <div className={'rightside-title'}>  
                <h1>Contact</h1>
            </div>
            <div className={'rightside-button'}>  
                <a href="#">Contact us</a>
            </div>
            <div className={'rightside-logo'}>  

            </div>
          </div>
      </div>
  </Layout>
)

export default ContactPage
