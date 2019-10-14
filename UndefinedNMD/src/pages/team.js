import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import '../components/team.css'
import SEO from "../components/seo"

const AssignmentsPage = () => (
  <Layout>
    <SEO title="Assignments" />
        <div className={'hero-img-detail'}>
            <h1 className="project-title">Our Team</h1>
            <div className={'subtitles-detail'}>
                <h5 className={'subtitle-text-detail'}>By undefined</h5>
                <div className={'line-detail'}></div>
                <h5 className={'date-text-detail'}>2019</h5>
            </div>
            <div>HERE KOMeS DE NAV</div>
            <div className={'content-div-detail'}>
                    <h1>This is our peoples</h1>
                <div className={'team-list-div'}>
                    <div className={'person-div'}>
                        <h3 className={'person-name'}>Jonas Stasseyns</h3>
                        <img className={'person-image'}/>
                    </div>
                    <div className={'person-div'}>
                        <h3 className={'person-name'}>Jonas Stasseyns</h3>
                        <img className={'person-image'}/>
                    </div>
                    <div className={'person-div'}>
                        <h3 className={'person-name'}>Jonas Stasseyns</h3>
                        <img className={'person-image'}/>
                    </div>
                    <div className={'person-div'}>
                        <h3 className={'person-name'}>Jonas Stasseyns</h3>
                        <img className={'person-image'}/>
                    </div>
                    <div className={'person-div'}>
                        <h3 className={'person-name'}>Jonas Stasseyns</h3>
                        <img className={'person-image'}/>
                    </div>
                    <div className={'person-div'}>
                        <h3 className={'person-name'}>Jonas Stasseyns</h3>
                        <img className={'person-image'}/>
                    </div>
                </div>
            </div>
        </div>
  </Layout>
)

export default AssignmentsPage
