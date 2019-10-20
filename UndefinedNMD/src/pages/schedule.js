import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import '../components/team.css'
import SEO from "../components/seo"
import {getFirebase} from "../components/firebase-config";

class AssignmentsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trigger: true,
        };
    }

    render() {
        return (
            <Layout>
                <SEO title="Assignments" />
                <div className={'hero-img-detail'}>
                    <h1 className="project-title">Schedule</h1>
                    <div className={'subtitles-detail'}>
                        <h5 className={'subtitle-text-detail'}>By undefined</h5>
                        <div className={'line-detail'}></div>
                        <h5 className={'date-text-detail'}>2019</h5>
                    </div>
                    <div className={'content-div-detail'}>
                        <h3></h3>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default AssignmentsPage
