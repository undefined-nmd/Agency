import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const AssignmentsPage = () => (
  <Layout>
    <SEO title="Assignments" />
        <div className={'hero-img-detail'}>
            <h1 className="project-title">Our current assignments</h1>
            <div className={'subtitles-detail'}>
                <h5 className={'subtitle-text-detail'}>By undefined</h5>
                <div className={'line-detail'}></div>
                <h5 className={'date-text-detail'}>2019</h5>
            </div>
            <div>HERE KOMeS DE NAV</div>
            <div className={'content-div-detail'}>
                <div className={'intro-div-detail'}>
                    <p className={'intro-text-detail'}>
                        Here is a list of the current projects we are working on at undefined! This sentence has no purpose whatsoever, except maybe for filling this paragraph because one sentence is not quite useful for styling a p-tag.
                    </p>
                    <h1>Main projects</h1>
                    <div className={'project-div'}>
                        <h1 className={'project-title'}>Agency website</h1>
                        <p className={'project-description'}>By the agency-website, we mean the actual website is our agency 'undefined', or, this website. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut nesciunt porro quibusdam ut. Architecto, corporis deserunt dolor doloribus inventore iusto omnis repellendus! Ad consequatur explicabo maxime quo sed unde vero!</p>
                    </div>
                    <div className={'project-div'}>
                        <h1 className={'project-title'}>Sleepwalking-project</h1>
                        <p className={'project-description'}>Another main-project of ours is the development of a solution to a sleepwalking child getting out of bed and jumping through their window. We are developing a solution that prevent this from happening.</p>
                    </div>
                    <div className={'project-div'}>
                        <h1 className={'project-title'}>Bario</h1>
                        <p className={'project-description'}></p>
                    </div>
                    <h1>Side-projects</h1>
                </div>
            </div>
        </div>
  </Layout>
)

export default AssignmentsPage
