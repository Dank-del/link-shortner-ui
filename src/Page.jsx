import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GetServer } from './config.js'

class Page extends Component {
    state = {
        link: "",
        alert_res: <div></div>,
        server_url: GetServer(),
        shortened_link: ""
    };

    handle_submit = (e) => {
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `${this.server_url}/new?url=${this.link}`);
        xhr.responseType = 'json';
        xhr.onload = function (e) {
            if (this.status === 200) {
                console.log('response', this.response)
                this.shortened_link = this.response.LinkId ; // JSON response  
            }
        };
        xhr.send();
        //fetch(`${this.server_url}/new?url=${this.link}`).then(res => res.json()).then(data => {
        //   console.log(data);
        //})
        this.setState(
            this.alert_res = (
                <div className="alert alert-dark" role="alert">
                    The link shortened <a href={this.link} className="alert-link">here</a>. Give it a click if you like.
                </div>
            )
        )
        // console.log(this.link);
    }

    render() {
        return (
            <React.Fragment>

                <div style={{ padding: 20, outerWidth: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>

                    <Form>
                        {this.alert_res}
                        <Form.Group className="mb-3">
                            <Form.Label>Link</Form.Label>
                            <Form.Control type="link" placeholder="Enter link" onChange={(e) => { this.link = e.target.value }} />
                            <Form.Text className="text-muted">
                                Enter the link to be shortened.
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handle_submit}>
                            Shorten
                        </Button>
                    </Form>
                </div>
            </React.Fragment>
        );
    }
}

export default Page;
