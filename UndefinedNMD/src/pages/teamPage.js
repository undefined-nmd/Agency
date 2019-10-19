import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import '../components/team.css'
import SEO from "../components/seo"
import { getFirebase } from "../components/firebase-config";

class TeamPage extends Component {
    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
            people: [],
            trigger: true,
        };
        this.peIndex = 0;
        this.nextPerson = this.nextPerson.bind(this);
        this.prevPerson = this.prevPerson.bind(this);
    }

    nextPerson() {
        console.log(this.peIndex)
        this.peIndex++
        this.setState({
            trigger: true,
        })
        console.log(this.state.people[this.peIndex])
        console.log(this.peIndex)
    }
    prevPerson() {
        console.log(this.peIndex)
        this.peIndex--
        this.setState({
            trigger: true,
        })
        console.log(this.state.people[this.peIndex])
        console.log(this.peIndex)
    }

    componentDidMount() {
        const lazyApp = import('firebase/app')
        const lazyDatabase = import('firebase/database')

        Promise.all([lazyApp, lazyDatabase]).then(([firebase]) => {
            let peeps = []
            const database = getFirebase(firebase).database()
            database.ref('people').on('value', (snapshot) => {
                snapshot.forEach((childSnapshot) => {
                    console.log(childSnapshot.val())
                    peeps.push(childSnapshot.val())
                })
                this.setState({ people: peeps })
                console.log(this.state.people)
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
                        <h1>This is our people</h1>
                        <div className={'team-list-div'}>
                            <div className={'nextbtn'} onClick={this.prevPerson}>Previous</div>
                            <div className={'nextbtn'} onClick={this.nextPerson}>Next</div>

                            <div className={'person-div'}>
                                <div className={'person-img-div'}>
                                    <img src={this.state.people[this.peIndex] ? 'http://stasseynsjonas.be/api/profiles/' + this.state.people[this.peIndex].image : 'http://stasseynsjonas.be/api/profiles/placeholder.jpg'} className={'person-image'} />
                                </div>
                                <div className={'person-data-div'}>
                                    <h1 className={'person-name'}>{this.state.people[this.peIndex] ? this.state.people[this.peIndex].name : 'Rendering...'}</h1>
                                    <div className={'stripe'}></div>
                                    <h3 className={'person-title'}>{this.state.people[this.peIndex] ? this.state.people[this.peIndex].title : 'Rendering...'}</h3>
                                </div>
                            </div>

                            {/*{this.state && this.state.people && this.state.people.map((item, index) =>*/}
                            {/*    <div className={'person-div'} key={index}>*/}
                            {/*        <div className={'person-img-div'}>*/}
                            {/*            <img src={'http://stasseynsjonas.be/api/profiles/' + item.image} className={'person-image'}/>*/}
                            {/*        </div>*/}
                            {/*        <div className={'person-data-div'}>*/}
                            {/*            <h1 className={'person-name'}>{item.name}</h1>*/}
                            {/*            <div className={'stripe'}></div>*/}
                            {/*            <h3 className={'person-title'}>{item.title}</h3>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*)}*/}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default TeamPage
