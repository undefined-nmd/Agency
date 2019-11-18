import React, { Component } from "react";
import Layout from "../components/layout"
import Menu from '../components/menu'
import "../styles/projects.css"
import SEO from "../components/seo"
import axios from 'axios'
import ProjectDetailPage from "../components/projectdetailpage";

class ProjectsPage extends Component {

    state = {
        navActive: false,
        projects: [],
        id: null
    }

    setStateId = (id) => {
        this.setState({
            id: id
        })
    }

    getNavState = () => {
        this.setState(state => ({ navActive: !state.navActive }));
        console.log('State change ! ! ! ');
    }

    componentDidMount() {
        axios.get('https://undefined-baas.firebaseapp.com/api/projects').then((snap) => {
            console.log(snap.data.data)
            this.setState({
                projects: snap.data.data
            })
        })
    }

    render() {
        if(this.state.id == null){
            return (
                <Layout>
                    <SEO title="Home" />
                    <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
                    <div className={'main-container-project-list'}>
                        <div className="toggle-nav reduce-width-float" onClick={this.getNavState}>
                            <div className="nav-line-top"></div>
                            <div className="nav-line-bottom"></div>
                        </div>

                        {this.state && this.state.projects && this.state.projects.map((item, index) => {
                            return (
                                <div className="project-list-container" key={index}>
                                    <h2 className="project-list-title">{item.data.title}</h2>
                                    <div className="project-list-row">
                                        <img src={item.data.pictures.reference_md ? item.data.pictures.reference_md : 'https://firebasestorage.googleapis.com/v0/b/undefined-baas.appspot.com/o/resized%2Ftumblr_n7jz4u5Fgd1ql2g28o1_500_1280x1280.jpg?alt=media&token=16672718-2b3c-493f-a1f0-f6cab1d8eaaa'} className="project-list-image"></img>
                                        <a href="/" className="action-button edit-height" onClick={() => this.setStateId(item.id)}>View project</a>
                                    </div>
                                    <p className="project-list-slug">{item.data.synopsis ? item.data.synopsis: ''}</p>
                                </div>
                            )
                        })}
                    </div>
                </Layout>
            );
        }else{
            return (
                <ProjectDetailPage/>
            )
        }
    }
}

export default ProjectsPage
