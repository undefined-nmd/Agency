import React, { Component } from "react"
import arrow from '../images/noun-arrow.svg';
import Menu from '../components/menu'

import Layout from "../components/layout"
import "../styles/teamPage.css"
import SEO from "../components/seo"
import axios from 'axios';

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
        if (this.peIndex < this.state.people.length - 1) {
            this.peIndex++
            this.setState({
                trigger: true,
            })
            console.log(this.state.people[this.peIndex])
            console.log(this.peIndex)
        }
    }
    prevPerson() {
        console.log(this.peIndex)
        if (this.peIndex > 0) {
            this.peIndex--
            this.setState({
                trigger: true,
            })
            console.log(this.state.people[this.peIndex])
            console.log(this.peIndex)
        }
    }

    componentDidMount() {
        axios.get('https://undefined-baas.firebaseapp.com/api/team').then((snap) => {
            this.setState({
                people: snap.data.data
            })
            console.log(snap.data.data)
        })
    }

    render() {

        return (
            <Layout>
                <SEO title="Assignments" />
                <a href="/#" className="undefined-copyright-contact">_defined</a>
                <div className="col team-col">
                    <div className="margin-fix">
                        <Menu menustate={this.state.navActive} toggleNav={this.getNavState} />
                    </div>
                    <div className="row top-row">
                        <div className="toggle-nav" onClick={this.getNavState}>
                            <div className="toggle-nav-child-cont">
                                <div className="nav-line-top"></div>
                                <div className="nav-line-bottom"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row center-row">
                        <img src={this.state.people[this.peIndex] ? this.state.people[this.peIndex].data.picture.reference_md : 'http://stasseynsjonas.be/api/profiles/placeholder.jpg'} className={'person-image persone-image-top swap-on-hover__front-image'} alt={'profile'} />
                        <img src={this.state.people[this.peIndex] ? this.state.people[this.peIndex].data.picture_hoover.reference_md : 'http://stasseynsjonas.be/api/profiles/placeholder.jpg'} className={'person-image persone-image-top swap-on-hover__back-image'} alt={'profile'} />
                        {this.peIndex === 0 ? '' : <p className="person-action-btn" onClick={this.prevPerson}><img src={arrow} alt="arrow" /></p>}
                        <div className={'person-data-div'}>
                            <h1 className={'person-name'}>{this.state.people[this.peIndex] ? this.state.people[this.peIndex].data.firstName + ' ' + this.state.people[this.peIndex].data.lastName : 'Rendering...'}</h1>
                            <div className={'person-bar'}></div>
                            <h3 className={'person-title'}>{this.state.people[this.peIndex] ? this.state.people[this.peIndex].data.jobTitle.title : 'Rendering...'}</h3>
                        </div>
                    </div>
                    <div className="row bottom-row">
                        {this.peIndex !== this.state.people.length - 1 ? <img src={this.state.people[this.peIndex + 1] ? this.state.people[this.peIndex + 1].data.picture.reference_md : 'http://stasseynsjonas.be/api/profiles/placeholder.jpg'} className={'person-image'} alt={'next-profile'} /> : ''}
                        {this.peIndex !== this.state.people.length - 1 ? <p className="person-action-btn" onClick={this.nextPerson}><img src={arrow} alt="arrow" className="flip-arrow" /></p> : ''}
                        <div className={'person-data-div'}>
                            {/*<h2 className="person-cue">{this.state.people[this.peIndex + 1] ? this.state.people[this.peIndex + 1].name : 'Rendering...'}</h2>*/}
                        </div>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default TeamPage
