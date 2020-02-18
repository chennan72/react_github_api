import React, {Component} from 'react';

export default class FollowerCard extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {follower} = this.props;
        console.log(follower)
        return (
            <div className="col-sm-4">
                <div className="card" style={{width: '18rem'}}>
                    <img
                        src={follower.avatar_url}
                        className="card-img-top" alt="Image"/>
                    <div className="card-body">
                        <h3 className="card-title">{follower.login}</h3>
                        <p className="card-text">Type: {follower.type}</p>
                        <a href={follower.html_url} className="btn btn-primary">His/Her GitHub Homepage</a>
                    </div>
                </div>
            </div>
        )
    }
}
