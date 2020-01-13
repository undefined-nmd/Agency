import React, { Component } from "react"
import Footer from "../components/footer"
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
                    <div className="main-container-edit">
                        <div className="toggle-nav reduce-width-float add-fixed" onClick={this.getNavState}>
                            <div className="toggle-nav-child-cont">
                                <div className="nav-line-top"></div>
                                <div className="nav-line-bottom"></div>
                            </div>
                        </div>
                        <p className="project-intro">
                            {this.state.content[0] ? this.state.content[0].data.synopsis : 'Rendering...'}
                        </p>
                        <div className="content-box-edit">
                            <h3 className="project-subtitle">{this.state.content[0] ? this.state.content[0].data.title : 'Rendering...'}</h3>
                            <p className="project-text">
                                {this.state.content[0] ? this.state.content[0].data.body : 'Rendering...'}
                            </p>
                        </div>
                    </div>
                    <Footer style={'footer-border'} />
                </div>
                {/* <a href="/#" className="home-btn">_defined</a> */}
            </Layout>
        )
    }
}

export default About
