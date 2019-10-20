import React, {Component} from "react"
import {Link} from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import '../styles/schedule.css'
import '../styles/layout.css'
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
                <SEO title="Assignments"/>
                <div className={'hero-img-detail'}>
                    <h1 className="project-title">Schedule</h1>
                    <div className={'subtitles-detail'}>
                        <h5 className={'subtitle-text-detail'}>By undefined</h5>
                        <div className={'line-detail'}></div>
                        <h5 className={'date-text-detail'}>2019</h5>
                    </div>
                </div>
                <div className={'content-div-detail'}>
                    <div className={'schedule-parent'}>
                        <div className={'schedule-day-div'}>
                            <h3 className={'schedule-day-name'}>Monday</h3>
                            <div className={'class-div'}>
                                <h5>Web of Things</h5>
                                <p>8:45 - 13:00</p>
                            </div>
                            <div className={'class-div'}>
                                <h5>Lunch break</h5>
                                <p>13:00 - 14:00</p>
                            </div>
                            <div className={'class-div'}>
                                <h5>Web of Things</h5>
                                <p>14:00 - 16:00</p>
                            </div>

                        </div>
                        <div className={'schedule-day-div'}>
                            <h3 className={'schedule-day-name'}>Tuesday</h3>
                            <div className={'class-div'}>
                                <h5>CMS Development</h5>
                                <p>8:45 - 12:00</p>
                            </div>
                        </div>
                        <div className={'schedule-day-div'}>
                            <h3 className={'schedule-day-name'}>Wednesday</h3>
                            <div className={'class-div'}>
                                <h5>CMS Development</h5>
                                <p>9:45 - 12:00</p>
                            </div>
                            <div className={'class-div'}>
                                <h5>Lunch break</h5>
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className={'class-div'}>
                                <h5>IBD-III</h5>
                                <p>13:00 - 16:00</p>
                            </div>
                        </div>
                        <div className={'schedule-day-div'}>
                            <h3 className={'schedule-day-name'}>Thursday</h3>
                            <div className={'class-div'}>
                                <h5>Crossmedial project</h5>
                                <p>13:00 - 16:00</p>
                            </div>
                        </div>
                        <div className={'schedule-day-div'}>
                            <h3 className={'schedule-day-name'}>Friday</h3>
                            <div className={'class-div'}>
                                <h5>RZL & PROCOM</h5>
                                <p>9:45 - 12:00</p>
                            </div>
                            <div className={'class-div'}>
                                <h5>Lunch break</h5>
                                <p>12:00 - 13:00</p>
                            </div>
                            <div className={'class-div'}>
                                <h5>Mixed Reality</h5>
                                <p>13:00 - 16:00</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default AssignmentsPage
