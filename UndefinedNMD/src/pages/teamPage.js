import React, { Component } from "react"
import { Link } from "gatsby"
import arrow from '../images/noun-arrow.svg';

import Layout from "../components/layout"
import "../styles/teamPage.css"
import SEO from "../components/seo"
import { getFirebase } from "../components/firebase-config";

class TeamPage extends Component {

    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
            people: [1, 2, 3],
            trigger: true,
            navActive: false,
            showNav: 'show-nav',
            hideNav: 'hide-nav'
        };
        this.peIndex = 0;
        this.nextPerson = this.nextPerson.bind(this);
        this.prevPerson = this.prevPerson.bind(this);
        this.toggleNav = this.toggleNav.bind(this);
    }

    nextPerson() {
        console.log(this.peIndex)
        console.log('length: ' + this.state.people.length)
        console.log()
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

    getNavState = () => {
        this.setState(state => ({ navActive: !state.navActive }));
        console.log(this.state.navActive)
    }

    toggleNav = () => {
        let navStatus = this.state.navActive;
        if (this.state.navActive === true) {
            navStatus = this.state.showNav
        } else {
            navStatus = this.state.hideNav
        }
        return navStatus;
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
                this.setState({ people: peeps })
                console.log(this.state.people)
                console.log('FIREBASE LAUNCHED')
            })
        })
    }

    render() {

        return (
            // <Layout>
            //     <SEO title="Assignments" />
            //     <div>HERE KOMeS DE NAV</div>
            //     <div className={'content-div-detail'}>
            //         <h1>This is our people</h1>
            //         <div className={'team-list-div'}>
            //             <div className={'nextbtn'} onClick={this.prevPerson}>Previous</div>
            //             <div className={'nextbtn'} onClick={this.nextPerson}>Next</div>

            //             <div className={'person-div'}>
            //                 <div className={'person-img-div'}>
            //                     <img src={this.state.people[this.peIndex] ? 'http://stasseynsjonas.be/api/profiles/' + this.state.people[this.peIndex].image : 'http://stasseynsjonas.be/api/profiles/placeholder.jpg'} className={'person-image'} />
            //                 </div>
            //                 <div className={'person-data-div'}>
            //                     <h1 className={'person-name'}>{this.state.people[this.peIndex] ? this.state.people[this.peIndex].name : 'Rendering...'}</h1>
            //                     <div className={'stripe'}></div>
            //                     <h3 className={'person-title'}>{this.state.people[this.peIndex] ? this.state.people[this.peIndex].title : 'Rendering...'}</h3>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </Layout>
            <Layout>
                <SEO title="Assignments" />
                <div className="col team-col">
                    <div className={this.toggleNav()}>
                        <div className="close-nav" onClick={this.getNavState}>
                            <div className="close-nav-top"></div>
                            <div className="close-nav-bottom"></div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <a className="nav-links" href="/teamPage" >Team</a>
                                <a className="nav-links" href="/projects" >Projects</a>
                                <a className="nav-links" href="/about" >About</a>
                                <a className="nav-links" href="/contact" >Contact</a>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <p className="nav-p">Please tell us about your future project</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <a href="/contact" className="button-contact-us">Contact us</a>
                            </div>
                            <h2>_defined</h2>
                        </div>
                    </div>
                    <div className="row top-row">
                        <div className="toggle-nav reduce-width" onClick={this.getNavState}>
                            <div className="nav-line-top"></div>
                            <div className="nav-line-bottom"></div>
                        </div>
                    </div>
                    <div className="row center-row">
                        <img src={this.state.people[this.peIndex] ? 'http://stasseynsjonas.be/api/profiles/' + this.state.people[this.peIndex].image : 'http://stasseynsjonas.be/api/profiles/placeholder.jpg'} className={'person-image'} />
                        <a className="person-action-btn" onClick={this.prevPerson}><img src={arrow} alt="arrow" /></a>
                        <div className={'person-data-div'}>
                            <h1 className={'person-name'}>{this.state.people[this.peIndex] ? this.state.people[this.peIndex].name : 'Rendering...'}</h1>
                            <div className={'person-bar'}></div>
                            <h3 className={'person-title'}>{this.state.people[this.peIndex] ? this.state.people[this.peIndex].title : 'Rendering...'}</h3>
                        </div>
                    </div>
                    <div className="row bottom-row">
                        <img src={this.state.people[this.peIndex] ? 'http://stasseynsjonas.be/api/profiles/' + this.state.people[this.peIndex].image : 'http://stasseynsjonas.be/api/profiles/placeholder.jpg'} className={'person-image'} />
                        <a className="person-action-btn" onClick={this.prevPerson}><img src={arrow} alt="arrow" className="flip-arrow" /></a>
                        <div className={'person-data-div'}>
                            <h2>Team</h2>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default TeamPage
