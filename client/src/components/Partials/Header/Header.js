import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';

class Header extends Component {


    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        if (window.innerWidth <= 767) {
            this.setState({
                isOpen: !this.state.isOpen
            });
        }
    }

    render() {

        const style = {
            color: 'white',
            textDecoration: 'none'
        }

        return (
            <div className="header">
                <Navbar color="dark" dark expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="m-auto" navbar >
                            <NavItem className="my-3 mx-5">
                               <Link style={style} to='/'>Home</Link>
                            </NavItem>
                            <NavItem className="my-3 mx-5">
                               <Link style={style} to='/about'>About</Link>
                            </NavItem>
                            <NavItem className="my-3 mx-5">
                               <Link style={style} to='/resources'>Resources</Link>
                            </NavItem>
                            <NavItem className="my-3 mx-5">
                               <Link style={style} to='/contact'>Contact</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }import
}

export default Header;