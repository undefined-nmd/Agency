import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import axios from 'axios';

class About extends Component {
    
    
    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
            content: [],
        };
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
                <div className="main-container">
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
            </Layout>
        )
    }
}

export default About
