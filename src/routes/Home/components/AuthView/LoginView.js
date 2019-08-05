import React from 'react';
import { connect } from 'react-redux';
import { userInit } from '../../../../store/userReduces';
import { post } from 'utils/httpHelper'
import { browserHistory } from 'react-router'

class LoginView extends React.Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errLogin: true,
            errLoginMessage: ''
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }



    onUserClick = () => {
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        post('auth/login', user).then(data => {
            if (data.status) {
                localStorage.setItem('userToken', data.token);
                this.props.loginUserData(data.userData);
                //redirect dashboard
                browserHistory.push('/dashboard');
            }
            this.setState({
                errLogin: data.status,
                errLoginMessage: data.message
            })
        });
        //        this.props.loginUserData(user);
    }

    loginError = () => {
        return <div className="alert alert-danger">{this.state.errLoginMessage}</div>
    }

    render() {
        const LoginError = this.loginError;
        const onViewChange = this.props.onViewChange;
        if (this.props.userData.name) {
            return <div> LOGİN BAŞARILI</div>
        } else {
            return (
                <div className="login-container">
                    <form className="form-inline">
                        <div className="form-group mb-2">
                            <input type="text" id="email" className="form-control" placeholder="email" value={this.state.email} onChange={this.inputChange} />
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <input type="password" id="password" className="form-control" placeholder="Password" value={this.state.password} onChange={this.inputChange} />
                        </div>
                        <button type="button" className="btn btn-primary mb-2" onClick={this.onUserClick}>Giriş Yap</button>
                        <a href="#" onClick={e => {
                            e.preventDefault();
                            onViewChange(3);
                        }}>Şifremi unuttum!</a>
                    </form>
                    <p>
                        Henüz üye olmadınız mı?<br />
                        Kayıt olmak için <b><u><a style={{ fontSize: "18px" }} href="#" onClick={e => {
                            e.preventDefault();
                            onViewChange(2)
                        }}>tıklayınız</a></u></b>.
                    </p>
                    {this.state.errLogin ? null : <LoginError />}
                </div>
            )
        }

    }
}

const matStateToProps = (state) => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loginUserData: (user) => dispatch(userInit(user))
    }
}

export default connect(matStateToProps, mapDispatchToProps)(LoginView)