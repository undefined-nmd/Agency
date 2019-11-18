import React, {Component} from "react"

class Roster extends Component {

    componentDidMount() {
        console.log('HSHefic')
        window.location.href = 'http://undefinednmd.gdm.gent'
    }

    render () {
        return (
            <h3>Redirecting...</h3>
        )
    }
}

export default Roster
