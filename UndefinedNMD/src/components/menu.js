import React, { Component } from "react";

class Menu extends Component {

    render() {
        const showHide = {
            showNav: 'show-nav',
            hideNav: 'hide-nav'
        };
        let menuState = this.props.menustate;

        return (
            <div menustate={menuState.toString()}
                className={menuState ? showHide.showNav : showHide.hideNav}>
                <div className="close-nav" onClick={this.props.toggleNav}>
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
        )
    }
}

export default Menu