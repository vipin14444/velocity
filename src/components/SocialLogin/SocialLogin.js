import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import GoogleLogin from 'react-google-login';
// import FacebookLogin from 'react-facebook-login';

export default class SocialLogin extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    responseFacebook = (response) => {
        console.log(response);
    }

    responseGoogle = (response) => {
        console.log(response);
    }

    render() {
        return (
            <div style={{ color: 'white' }}>
                Social Login

                <FacebookLogin
                    appId="371992790652880"
                    fields="name,email,picture"
                    callback={this.responseFacebook}
                    render={renderProps => (
                        <button onClick={renderProps.onClick}>This is my custom FB button</button>
                    )}
                />

                <GoogleLogin
                    clientId="557654524875-2gofettn9e0tmtvr8o1a0sn6jkkaf69h.apps.googleusercontent.com"
                    render={renderProps => (
                        <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
                    )}
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                />

            </div>
        )
    }
}
