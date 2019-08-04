import React from 'react';
import { connect } from 'react-redux';
import { userInit } from '../../../../store/userReduces';

class LoginView extends React.Component{

    constructor(){
        super();
        this.state={
            email: '',
            password: ''
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    

    onUserClick = () =>{
        console.log(this.state);
        const user = {
            name: "Muhammet METİN",
            email: "mehmetmetin436@gmail.com",
            age: 21,
            gender: "male"
        }
        this.props.loginUserData(user);
    }

    render(){
        const onViewChange = this.props.onViewChange;
        if(this.props.userData.name){
            return <div> LOGİN BAŞARILI</div>
        }else{
            return (
                <div>
                    <form className="form-inline">
                        <div className="form-group mb-2">
                            <input type="text" id="email" className="form-control" placeholder="email" value={this.state.email} onChange={this.inputChange}/>
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
                        Kayıt olmak için <b><u><a style={{fontSize: "18px"}} href="#" onClick={e => {
                            e.preventDefault();
                            onViewChange(2)
                        }}>tıklayınız</a></u></b>.
                    </p>
                </div>
            )
        }
        
    }
}

const matStateToProps = (state) =>{
    return{
        userData: state.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loginUserData: (user) => dispatch(userInit(user))
    }
}

export default connect(matStateToProps,mapDispatchToProps)(LoginView)