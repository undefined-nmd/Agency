import React, {Component} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import "../styles/index.css"
import SEO from "../components/seo"
import axios from 'axios'


class ServicesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            services: []
        };
    }

    componentDidMount() {
        axios.get('https://undefined-baas.firebaseapp.com/api/services').then((snap) => {
            console.log(snap.data.data)
            this.setState({
                services: snap.data.data
            })
        })
    }

    render() {
        return (
            <Layout>
                <SEO title="Services"/>
                <div className={'container'}>
                    {this.state && this.state.services && this.state.services.map((item, index) => {
                        console.log(item)
                        return (
                            <div key={index}>
                                <h3>{item.data.title}</h3>
                                <p>{item.data.description}</p>
                            </div>
                        )
                    })}
                </div>
            </Layout>
        )
    }
}

export default ServicesPage
