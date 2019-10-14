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
        // change code below this line
        this.state = {
            peoples: [],
        };
    }

    componentDidMount() {
        const lazyApp = import('firebase/app')
        const lazyDatabase = import('firebase/database')

        Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
            let peeps = []
            const database = getFirebase(firebase).database()
            database.ref('peoples').on('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    console.log(childSnapshot.val())
                    peeps.push(childSnapshot.val())
                })
                this.setState({peoples:peeps})
            })
        })
    }

    render() {
        return (
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
                            {this.state && this.state.peoples && this.state.peoples.map((item, index) =>
                                <div className={'person-div'} key={index}>
                                    <h5 className={'person-name'}>{item.name}</h5>
                                    <img src={'http://stasseynsjonas.be/api/profiles/' + item.image} className={'person-image'}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default AssignmentsPage
