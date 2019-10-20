import React, { Component } from "react";
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import "../styles/index.css"
import SEO from "../components/seo"

class IndexPage extends Component {

    state = {
        navActive: false,
        showNav: 'show-nav',
        hideNav: 'hide-nav'
    }

    getNavState = () => {
        this.setState(state => ({ navActive: !state.navActive }));
        console.log(this.state.navActive)
    }

    toggleNav = () => {
        let navStatus = this.state.navActive;
        if (this.state.navActive === true) {
            navStatus = this.state.showNav
        } else {
            navStatus = this.state.hideNav
        }
        return navStatus;
    }

    render() {
        return (
            <Layout>
                <SEO title="Home" />
                <div className={'container'}>
                    <div className={this.toggleNav()}>
                        <div className="close-nav" onClick={this.getNavState}>
                            <div className="close-nav-top"></div>
                            <div className="close-nav-bottom"></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a className="nav-links" href="/teamPage" >Team</a>
                                <a className="nav-links" href="/projects" >Projects</a>
                                <a className="nav-links" href="/about" >About</a>
                                <a className="nav-links" href="/contact" >Contact</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p className="nav-p">Please tell us about your future project</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <a href="/contact" className="button-contact-us">Contact us</a>
                            </div>
                            <h2>_defined</h2>
                        </div>

                    </div>
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
                            <div className="toggle-nav" onClick={this.getNavState}>
                                <div className="nav-line-top"></div>
                                <div className="nav-line-bottom"></div>
                            </div>
                            <h2 className="brand-title">_defined</h2>
                            <h4 className="baseline">We <span>Build</span> <span>Digital</span> <span>Stuff</span></h4>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}



// const IndexPage = () => (
//     <Layout>
//         <SEO title="Home" />
//         <div className={'container'}>
//             <div className={'hero-img'}>
//                 <div className={'hero-child'}>
//                     <h1 className="project-title">Snek the museum</h1>
//                     <div className={'subtitles'}>
//                         <h5 className={'subtitle-text'}>View project</h5>
//                         <div className={'line'}></div>
//                         <h5 className={'date-text'}>2019</h5>
//                     </div>
//                 </div>
//             </div>
//             <div className={'content-div'}>
//                 <div className={'content-child'}>
//                     <div className="toggle-nav">
//                         <div className="nav-line-top"></div>
//                         <div className="nav-line-bottom"></div>
//                     </div>
//                     <h2 className="brand-title">_defined</h2>
//                     <h4 className="baseline">We <span>Build</span> <span>Digital</span> <span>Stuff</span></h4>
//                 </div>
//             </div>
//         </div>
//     </Layout>
// )

export default IndexPage
