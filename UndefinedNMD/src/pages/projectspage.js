import React, { Component } from "react";

import Layout from "../components/layout"
import Menu from '../components/menu'
import "../styles/projects.css"
import SEO from "../components/seo"

class ProjectsPage extends Component {

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
                <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
                <div className={'main-container-project-list'}>
                    <div className="toggle-nav reduce-width-float" onClick={this.getNavState}>
                        <div className="nav-line-top"></div>
                        <div className="nav-line-bottom"></div>
                    </div>
                    <div className="project-list-container">
                        <h2 className="project-list-title">Tinderborg Pr2xz</h2>
                        <div className="project-list-row">
                            <img src={require('../images/tumblr_n7jz4u5Fgd1ql2g28o1_500.jpg')} className="project-list-image"></img>
                            <a href="/" className="action-button edit-height">View project</a>
                        </div>
                        <p className="project-list-slug">A brief intro about the project comes here. A brief intro about the project comes here. A brief intro about the project comes here.</p>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default ProjectsPage
