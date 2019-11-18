import React, {Component} from "react"

import Layout from "../components/layout"
import "../styles/index.css"
import SEO from "../components/seo"
import axios from 'axios'
import Menu from "../components/menu";


class ServicesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navActive: false,
            services: []
        };
    }

    getNavState = () => {
        this.setState(state => ({ navActive: !state.navActive }));
        console.log('State change ! ! ! ');
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
                    <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
                    <div className="toggle-nav" onClick={this.getNavState}>
                        <div className="nav-line-top"></div>
                        <div className="nav-line-bottom"></div>
                    </div>
                    <h1>Services</h1>
                    <div className={'services-list-container'}>
                        {this.state && this.state.services && this.state.services.map((item, index) => {
                            console.log(item)
                            return (
                                <div key={index}>
                                    <h3>{item.data.title}</h3>
                                    <p>{item.data.description}</p>
                                    <img src={item.data.picture.reference_md} alt={'service illustration'} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        )
    }
}

export default ServicesPage
