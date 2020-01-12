import React, { Component } from "react";
import Layout from "../components/layout"
import Footer from "../components/footer"
import Menu from '../components/menu'
import "../styles/projects.css"
import SEO from "../components/seo"
import axios from 'axios'
import ProjectDetailPage from "../components/projectdetailpage";
import FadeIn from "react-fade-in";

class ProjectsPage extends Component {
    state = {
        navActive: false,
        projects: [],
        id: false,
        projectTitle: '',
        projectBody: '',
        projectSynopsis: '',
        images: '',
    }

    setStateId = (item) => {
        let projectTitle = item.data.title
        let projectBody = item.data.body
        let projectSynopsis = item.data.synopsis
        let images = item.data.images
        this.setState({
            id: true,
            projectTitle: projectTitle,
            projectBody: projectBody,
            projectSynopsis: projectSynopsis,
            projectImages: images
        })
    }

    getNavState = () => {
        this.setState(state => ({ navActive: !state.navActive }));
        console.log('State change ! ! ! ');
    }

    componentDidMount() {
        // Executing a GET request to the cloud functions REST api to get the projects
        axios.get('https://undefined-baas.firebaseapp.com/api/projects').then((snap) => {
            this.setState({
                projects: snap.data.data
            })
        })
    }

    render() {
        // Check if this.state.id is set (which means a project has been clicked) and if that's the case,
        // the project component will be loaded instead of the list
        if (!this.state.id) {
            return (
                <Layout>
                    <SEO title="Home" />
                    <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
                    <div className={'main-container-project-list'}>
                        {/* <a href="/#`" className="undefined-copyright-contact">_defined</a> */}
                        <div className="toggle-nav add-fixed projects-page-higher" onClick={this.getNavState}>
                            <div className="nav-line-top" />
                            <div className="nav-line-bottom" />
                        </div>
                        {this.state && this.state.projects && this.state.projects.map((item, index) => {
                            // Mapping the project thumbnails/previews
                            return (
                                <div className="project-list-container" key={index}>
                                    <h2 className="project-list-title">{item.data.title}</h2>
                                    <div className="project-list-row">
                                        <img src={item.data.images[0] ? item.data.images[0] : 'https://firebasestorage.googleapis.com/v0/b/undefined-baas.appspot.com/o/resized%2Ftumblr_n7jz4u5Fgd1ql2g28o1_500_1280x1280.jpg?alt=media&token=16672718-2b3c-493f-a1f0-f6cab1d8eaaa'} className="project-list-image" alt={'project-img'} />
                                        <p className="action-button-projects edit-height" onClick={() => this.setStateId(item)}>View project</p>
                                    </div>
                                    <p className="project-list-slug">{item.data.synopsis ? item.data.synopsis : ''}</p>
                                </div>
                            )
                        })}
                        <Footer style="footer-border" />
                    </div>
                </Layout>
            );
        } else {
            return (
                // Loading the projectdetailpage component while passing the data through props
              <FadeIn>
                  <ProjectDetailPage projecttitle={this.state.projectTitle} projectbody={this.state.projectBody} projectsynopsis={this.state.projectSynopsis} projectimages={this.state.projectImages}/>
              </FadeIn>
            )
        }
    }
}

export default ProjectsPage
