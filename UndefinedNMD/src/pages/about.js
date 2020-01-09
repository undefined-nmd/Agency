import React, { Component } from "react"
import Menu from '../components/menu'
import Layout from "../components/layout"
import SEO from "../components/seo"
import axios from 'axios';

class About extends Component {
    constructor(props) {
        super(props);

        // change code below this line        
        this.state = {
            content: [],
            navActive: false
        };
        this.getNavState = this.getNavState.bind(this)
    }

    getNavState = () => {
        this.setState(state => ({ navActive: !state.navActive }));
        console.log('State change ! ! ! ');
    }

    componentDidMount() {
        axios.get('https://undefined-baas.firebaseapp.com/api/content')
            .then((snap) => {
                this.setState({
                    content: snap.data.data
                })
                console.log(this.state.content)
            })
    }

    render() {

        return (
            <Layout>
                <SEO title="Assignments" />
                <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
                <div className={'contact-container'}>
                    <div className="main-container">
                        <div className="toggle-nav reduce-width-float add-fixed" onClick={this.getNavState}>
                            <div className="nav-line-top"></div>
                            <div className="nav-line-bottom"></div>
                        </div>
                        <p className="project-intro">
                            {this.state.content[0] ? this.state.content[0].data.synopsis : 'Rendering...'}
                        </p>
                        <div className="content-box">
                            <h3 className="project-subtitle">{this.state.content[0] ? this.state.content[0].data.title : 'Rendering...'}</h3>
                            <p className="project-text">
                                {this.state.content[0] ? this.state.content[0].data.body : 'Rendering...'}
                            </p>
                        </div>
                    </div>
                </div>
                <a href="/#" className="home-btn">_defined</a>
            </Layout>
        )
    }
}

export default About
