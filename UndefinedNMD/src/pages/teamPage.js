import React, { Component } from "react"
import arrow from '../images/noun-arrow.svg';
import Menu from '../components/menu'

import Layout from "../components/layout"
import "../styles/teamPage.css"
import SEO from "../components/seo"
import { getFirebase } from "../components/firebase-config";

class TeamPage extends Component {

    constructor(props) {
        super(props);
        // change code below this line
        this.state = {
            people: [],
            trigger: true,
            navActive: false,
            showNav: 'show-nav',
            hideNav: 'hide-nav'
        };
        this.peIndex = 0;
        this.nextPerson = this.nextPerson.bind(this);
        this.prevPerson = this.prevPerson.bind(this);
    }

    getNavState = () => {
        this.setState(state => ({ navActive: !state.navActive }));
        console.log('State change ! ! ! ');
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
            database.ref('peoples').on('value', (snapshot) => {
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
                <div className="col team-col">
                    <div className="margin-fix">
                        <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
                    </div>
                    <div className="row top-row">
                        <div className="toggle-nav reduce-width" onClick={this.getNavState}>
                            <div className="nav-line-top"></div>
                            <div className="nav-line-bottom"></div>
                        </div>
                    </div>
                    <div className="row center-row">
                        <img src={this.state.people[this.peIndex] ? 'http://stasseynsjonas.be/api/profiles/' + this.state.people[this.peIndex].image : 'http://stasseynsjonas.be/api/profiles/placeholder.jpg'} className={'person-image persone-image-top swap-on-hover__front-image'} />
                        <img src={this.state.people[this.peIndex] ? 'http://stasseynsjonas.be/api/profiles/h-' + this.state.people[this.peIndex].image : 'http://stasseynsjonas.be/api/profiles/placeholder.jpg'} className={'person-image persone-image-top swap-on-hover__back-image'} />
                        <a className="person-action-btn" onClick={this.prevPerson}><img src={arrow} alt="arrow" /></a>
                        <div className={'person-data-div'}>
                            <h1 className={'person-name'}>{this.state.people[this.peIndex] ? this.state.people[this.peIndex].name : 'Rendering...'}</h1>
                            <div className={'person-bar'}></div>
                            <h3 className={'person-title'}>{this.state.people[this.peIndex] ? this.state.people[this.peIndex].title : 'Rendering...'}</h3>
                        </div>
                    </div>
                    <div className="row bottom-row">
                        <img src={this.state.people[this.peIndex + 1] ? 'http://stasseynsjonas.be/api/profiles/' + this.state.people[this.peIndex + 1].image : 'http://stasseynsjonas.be/api/profiles/placeholder.jpg'} className={'person-image'} />
                        <a className="person-action-btn" onClick={this.nextPerson}><img src={arrow} alt="arrow" className="flip-arrow" /></a>
                        <div className={'person-data-div'}>
                            <h2 className="person-cue">{this.state.people[this.peIndex + 1] ? this.state.people[this.peIndex + 1].name : 'Rendering...'}</h2>
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default TeamPage
