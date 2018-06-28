import React, { Component } from 'react';
import axios from 'axios';

import './ProjectPledgeDetail.css';

class ProjectPledgeDetail extends Component {
    state = {
        loadedPost: null,
        //h1 =  pledgeID
        //p = name
        //p = description
        //p = aidOrg
        title: '',
        content: ''
    }

    componentDidUpdate () {
        if ( this.props.id ) {
            if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
                axios.get( '/posts/' + this.props.id )
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                    } );
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            });
    }

    updateDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if ( this.props.id ) {
            post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        }
        if ( this.state.loadedPost ) {
            post = (
                //h1 =  pledgeID
                //p = name
                //p = description
                //p = aidOrg
                <div className="ProjectPledgeDetail">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.updateDataHandler} className="Update">Update Project Pledge</button>
                    </div>
                </div>

            );
        }
        return post;
    }
}

export default ProjectPledgeDetail;