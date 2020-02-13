import React, {Component} from 'react';
import FollowerCard from "./FollowerCard";

export default class Follower extends Component {

    constructor(props) {
        super(props)
        this.state = {
            followers: []
        }
    }

    componentWillMount() {
        fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
            .then(response => response.json())
            .then(followers => {
                    this.setState({followers: followers});
                }
            );
    }

    render() {
        console.log(this.state.followers)
        return (
            <div className="container-fluid">
                <div className="card-deck">
                    {this.state.followers.map(follower =>
                        <FollowerCard follower={follower}/>
                    )}
                </div>
            </div>
        )
    }
}
