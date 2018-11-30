import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Contact.scss';

class Contact extends Component {

    clearFields = () => {
        document.querySelector("#name").value = "";
        document.querySelector("#email").value = "";
        document.querySelector("#message").value = "";
    }

    onFormSubmit = async (e) => {
        e.preventDefault();
        const name = document.querySelector("#name").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;

        const data = {
            name: name,
            email: email,
            message: message
        }

        await axios.post('/api/contact', {data});
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="container-fluid m-0 p-0 text-center h-100 contact-page">
                <header className="container pt-5 pb-4">
                    <div className="d-flex justify-content-between">
                        <div><img src="/public/images/logo.svg" height="50" alt="" /></div>
                        <div>
                            <button className="btn undo-button mr-2" onClick={this.clearFields}>
                                <i className="fas fa-undo-alt"></i>
                            </button>
                            <Link to="/">
                                <button className="btn delete-button">
                                    <i className="fas fa-times"></i>
                                </button>
                            </Link>
                        </div>
                    </div>
                </header>
                <hr />
                <h3 className="my-5 mx-auto header-text text-muted">Thank you for reaching out to me. I will get back with you by mid-day tomorrow.</h3>
                <div className="form">
                    <form onSubmit={(event) => this.onFormSubmit(event)}>
                        <div className="row px-5">
                            <div className="col-md-6 my-2">
                                <div className="form-group">
                                    <label htmlFor="name">Name / Company</label>
                                    <input type="text" id="name" className="form-control"  required/>
                                </div>
                            </div>
                            <div className="col-md-6 my-2">
                                <div className="form-group">
                                    <label htmlFor="name">Email</label>
                                    <input type="email" id="email" className="form-control"  required/>
                                </div>
                            </div>
                        </div>
                        <div className="form-group px-5">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" rows="7" required></textarea>
                        </div>
                        <button className="btn btn-outline-info my-4 mx-auto" type="submit">Send</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;