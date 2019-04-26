import React, {Component} from 'react';
import { Link, withRouter } from 'react-router-dom'

/*
    create navigation bar
*/
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.toggleNavbbar = this.toggleNavbbar.bind(this);
        this.state = {collapsed: true};
    }

    logOut(e) {
        e.preventDefault()
        localStorage.removeItem('userdata')
        this.props.history.push(`/`)
    }

    toggleNavbbar() {
        this.setState({collapsed:!this.state.collapsed,});
    }
    render() { 
        const loginMenu = (
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </li>
            </div>
        )

        const userMenu = (
            <div className="navbar-nav mr-auto">
                <li className="nav-item">
                    <Link to="/profile" className="nav-link">
                        Profile
                    </Link>
                </li>
                <li className="nav-item">
                    <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                        Logout
                    </a>
                </li>
            </div>
        )

        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand w3-button w3-theme-d1" href="/">Q&A</a>
                
                
                <div>
                    <ul className="navbar-nav" >
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home 
                            </Link>
                        </li>{
                            console.log(localStorage.userdata)
                        }
                        {localStorage.userdata ? userMenu:loginMenu}
                    </ul>
                </div>
            </nav>
        )
    }
}

export default withRouter(NavBar);