import React, { Component } from 'react';
import axios from 'axios';

import './FundProjectPledge.css';

class FundProjectPledge extends Component {
    state = {
        title: '',
        content: '',
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
            });
    }

    render () {
        return (
            <div className="FundProjectPledge">
                <h1>Transfer Funds</h1>
                <label>GovOrgID</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>ProjectPledgeID</label>
                <input type="text" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <button onClick={this.postDataHandler}>Transfer Funds</button>
            </div>
        );
    }
}

export default FundProjectPledge;