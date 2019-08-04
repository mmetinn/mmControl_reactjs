import React from 'react';
import LoginView from './LoginView';
import SignUpView from './SignUpView';
import PassReset from './PassReset';

class AuthView extends React.Component {
    constructor(){
        super();
        //1 Giriş Ekranı
        //2 Kayıt Ekranı
        //3 Şifre Reset Ekranı
        this.state={
            currentView:2
        }
    }

    changeView = (newView) =>{
        this.setState({
            currentView: newView
        })
    }
    render() {
        return this.state.currentView === 1
                        ? <LoginView onViewChange={this.changeView}/>
                        :this.state.currentView === 2
                        ? <SignUpView onViewChange={this.changeView}/>
                        : <PassReset onViewChange={this.changeView}/>
                
    }
}

export default AuthView