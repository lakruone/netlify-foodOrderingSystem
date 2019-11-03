import React, { Component } from 'react';
import AuthService from '../../src/Auth/AuthService';

export default function withAuth(AuthComponent) {
   const Auth = new AuthService("https://shielded-mountain-60408.herokuapp.com/user");
   return class AuthWrapped extends React.Component {
    constructor() {
        super();
        this.state = {
            user: null
        }
    }
    componentWillMount() {//hook which checks the auth
        if (!Auth.loggedIn()) {
           this.props.history.replace('/login')
        }
        else {
            try {
                const profile = Auth.getProfile()
                this.setState({
                    user: profile
                })
            }
            catch(err){
                Auth.logout()
                this.props.history.replace('/login')
            }
        }
    }
    render() {
        if (this.state.user) {
            return (
                <AuthComponent history={this.props.history} user={this.state.user} />
            )
        }
        else {
            return null
        }
    }

    }
}