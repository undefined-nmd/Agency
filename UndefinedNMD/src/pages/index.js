import React, { Component } from "react";

import Layout from "../components/layout"
import Menu from '../components/menu'
import "../styles/index.css"
import SEO from "../components/seo"

class IndexPage extends Component {

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
                <SEO title="Home" />
                <div className={'container'}>
                    <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
                    <div className={'hero-img'}>
                        <div className={'hero-child'}>
                            <h1 className="project-title">Snek the museum</h1>
                            <div className={'subtitles'}>
                                <h5 className={'subtitle-text'}>UX / UI</h5>
                                <div className={'line'}></div>
                                <h5 className={'date-text'}>2019</h5>
                            </div>
                            {/*<p>{this.state.data}</p>*/}
                        </div>
                    </div>
                    <div className={'content-div'}>
                        <div className={'content-child'}>
                            <div className="toggle-nav position-right-nav" onClick={this.getNavState}>
                                <div className="toggle-nav-child-cont">
                                    <div className="nav-line-top"></div>
                                    <div className="nav-line-bottom"></div>
                                </div>
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
