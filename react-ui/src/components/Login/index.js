import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setEmail } from 'app/actions';

import './Login.scss';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            errorMessage: null
        };
    }

    onSubmit = event => {
        event.preventDefault();

        const { history, onSetEmail } = this.props;

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                email: this.email.value,
                password: this.password.value
            })
        })
            .then(response => response.json())
            .then(json => {
                if (json.message) {
                    this.setState({
                        errorMessage: json.message
                    });
                }

                if (json.email) {
                    localStorage.setItem('bap-token', json.token);
                    onSetEmail(this.email.value);
                    history.push('/course');
                }
            });
    };

    renderErrorMessage() {
        if (!this.state.errorMessage) { return null; }

        return <div className="Alert">{this.state.errorMessage}</div>;
    }

    render() {
        return (
            <form className="Login" onSubmit={this.onSubmit}>
                {this.renderErrorMessage()}
                <input
                    className="Input Login__input"
                    placeholder="Email"
                    ref={email => this.email = email}
                    type="email"
                />
                <input
                    className="Input Login__input"
                    placeholder="Email"
                    ref={password => this.password = password}
                    type="password"
                />
                <button className="Button">Log in</button>
            </form>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        email: state.app.email
    };
};

const mapActionsToProps = {
    onSetEmail: setEmail
};

export default connect(mapStateToProps, mapActionsToProps)(Login);