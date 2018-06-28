import React, { Component } from 'react';
import axios from 'axios';

import ProjectPledge from '../../components/ProjectPledge/ProjectPledge';
import ProjectPledgeDetail from '../../components/ProjectPledgeDetail/ProjectPledgeDetail';
import FundProjectPledge from '../../components/FundProjectPledge/FundProjectPledge';
import './GlobalCitizen.css';

class GlobalCitizen extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount () {
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 9);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
            } )
            .catch(error => {
                this.setState({error: true});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return <ProjectPledge
                    key={post.id}
                    title={post.title}
                    clicked={() => this.postSelectedHandler(post.id)} />;
            });
        }

        return (
            <div>
                <section className="GlobalCitizen">
                    {posts}
                </section>
                <section>
                    <ProjectPledgeDetail id={this.state.selectedPostId} />
                </section>
                <section>
                    <FundProjectPledge />
                </section>
            </div>
        );
    }
}

export default GlobalCitizen;