import React, { Component } from "react";

export default class SingUp extends Component {
    constructor(props) {
        super(props);


        this.state = {
            user: '',
            password: ''
        };


    }
    handleUserChange(e) {
        this.setState({ email: e.target.value })
    }
    handlePasswordChange(e) {
        this.setState({ password: e.target.value })
    }
    signUp() {
        this.props.onClickAdd();
        // alert('Email address is ' + this.state.email + ' Password is ' + this.state.password);
    }
    render() {
        
        return (
            <div className="content">
                <form className="form-signup">
                    <h2 className="form-signup-heading"> Please sign up </h2>
                    <label htmlFor="inputUser" className="sr-only"> User Name </label>
                    <input type="user" onChange={this.handleUserChange.bind(this)} id="inputUser" className="form-control" placeholder="User name" required autoFocus />
                    <label htmlFor="inputPassword" className="sr-only"> Password </label>
                    <input type="password" onChange={(e) => {
                        this.handlePasswordChange(e);
                    }} id="inputPassword" className="form-control" placeholder="Password" required />
                    <button className="btn btn-lg btn-primary btn-block" onClick={this.signUp.bind(this)} type="button"> Sign up </button>
                </form>
            </div>

        );
    }
}