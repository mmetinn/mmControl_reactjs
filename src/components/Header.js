import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

    constructor() {
        super();

        this.state = {
            isNavOpen: false
        }
    }
    changeNavState =()=> {
        this.setState({ isNavOpen: !this.state.isNavOpen })        
    }

    render() {
        console.log('renderingggggggggg');

        return (
            <header>
                <nav className="container navbar navbar-expand-lg justify-content-between">
                    <a className="navbar-brand" href="#">M&M-Control</a>
                    <button onClick={this.changeNavState} className="navbar-toggler" type="button">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse" style={{ display: this.state.isNavOpen ? "block" : "none" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link activeClassName="active" className="nav-link" to="/">Anasayfa</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName="active" className="nav-link" to="/abouthapp">Uygulama Hakkında</Link>
                            </li>
                            <li className="nav-item">
                                <Link activeClassName="active" className="nav-link" to="/contactus">Bize Ulaşın</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;