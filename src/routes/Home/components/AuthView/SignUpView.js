import React from 'react';
import InputNormal from '../Inputs/InputNormal';
import PhoneNumberInput from '../Inputs/PhoneNumberInput';
import InputWithBtn from '../Inputs/InputWithBtn';
import Axios from 'axios';
import * as Http from 'utils/httpHelper'

class SignUpView extends React.Component {

    constructor() {
        super();
        this.state = {
            isDoctor: '',
            sex: '',
            degree: '',
            doctorName: '',
            doctorLastName: '',
            dateOfBirth: '',
            placeOfWork: '',
            expertise: '',
            liveCity: '',
            liveTown: '',
            phoneNumber: '',
            email: '',
            emailRepeat: '',
            password: '',
            passwordRepeat: '',
            hasError: false,
            errorMessage: '',
            hasPassEmailMatchError: false,
            errorPassEmail: '',
            alreadyRegisteredMessage: '',
            alreadyRegistered: true,
            successRegistered: true

        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }



    onSignUp = (e) => {
        //formun normal davranısını preventdefault ile durdurduk
        //çünkü form sayfayı yaniler ve biz bunu istemiyoruz.
        e.preventDefault();
        const model = this.state;
        if (model.isDoctor === '' || model.sex === '' || model.degree === '' || model.doctorName === '' ||
            model.doctorLastName === '' || model.dateOfBirth === '' || model.placeOfWork === '' || model.expertise === '' ||
            model.liveCity === '' || model.liveTown === '' || model.phoneNumber === '' || model.email === '' ||
            model.emailRepeat === '' || model.password === '' || model.passwordRepeat === '') {
            console.log(model);

            this.setState({
                hasError: true,
                errorMessage: "Lütfen Tüm alanları doldurnuz"
            });
            if (this.state.password !== this.state.passwordRepeat && this.state.email !== this.state.emailRepeat) {
                this.setState({
                    hasPassEmailMatchError: true,
                    errorPassEmail: "Emailler ve şifreler eşleşmiyor"
                })
            } else if (this.state.password !== this.state.passwordRepeat) {
                this.setState({
                    hasPassEmailMatchError: true,
                    errorPassEmail: "Şifreler eşleşmiyor"
                })
            } else if (this.state.email !== this.state.emailRepeat) {
                this.setState({
                    hasPassEmailMatchError: true,
                    errorPassEmail: "Emailler eşleşmiyor"
                })
            }
            return;
        }

        Http.post('auth/sign-up', model).then(res => {
            console.log("res==>", res);
            this.setState({
                alreadyRegistered: res.status,
                alreadyRegisteredMessage: res.errMessage
            })

        });
    }

    alreadyRegistered = () => {
        if(!this.state.alreadyRegistered){
            return <div className="alert alert-danger">{this.state.alreadyRegisteredMessage}</div>            
        }else{
            return <div className="alert alert-primary">{this.state.alreadyRegisteredMessage}</div>                        
        }
    }
    
    passEmalMatchError = () => {
        return <div className="alert alert-danger">{this.state.errorPassEmail}</div>
    }
    renderError = () => {
        return <div className="alert alert-danger">{this.state.errorMessage}</div>
    }

    render(props) {
        const Error = this.renderError;
        const PassEmailErr = this.passEmalMatchError;
        const AlreadyRegistered = this.alreadyRegistered;
        return (
            <div className="signup-container">
                <form onSubmit={this.onSignUp}>
                    <label>Doktor Musunuz?</label>
                    <select id="isDoctor" onChange={this.inputChange} className="custom-select custom-select-sm">
                        <option defaultValue>Seçiniz</option>
                        <option value="Evet">Evet</option>
                        <option value="Hayır">Hayır</option>
                    </select>
                    <label>Cinsiyetiniz</label>
                    <select id="sex" onChange={this.inputChange} className="custom-select custom-select-sm">
                        <option defaultValue>Seçiniz</option>
                        <option value="Kadın">Kadın</option>
                        <option value="Erkek">Erkek</option>
                    </select>
                    <label>Ünvanınız</label>
                    <select id="degree" onChange={this.inputChange} className="custom-select custom-select-sm">
                        <option defaultValue>Ünvan1</option>
                        <option value="1">Ünvan2</option>
                        <option value="2">Ünvan3</option>
                        <option value="3">Ünvan4</option>
                        <option value="4">Ünvan5</option>
                        <option value="5">Ünvan6</option>
                    </select>
                    <InputNormal id="doctorName" onChangeMethod={this.inputChange} labelText="Adınız" type="text" placeholder="Adınız" />
                    <InputNormal id="doctorLastName" onChangeMethod={this.inputChange} labelText="Soyadınız" type="text" placeholder="Soyadınız" />
                    <InputNormal id="dateOfBirth" onChangeMethod={this.inputChange} labelText="Doğum Tarihiniz" type="text" placeholder="12/12/12" />
                    <InputNormal id="placeOfWork" onChangeMethod={this.inputChange} labelText="Çalıştığınız Hastane veya Muayenehane" type="text" placeholder="... Hastanesi|Muayenehanesi" />
                    <InputNormal id="expertise" onChangeMethod={this.inputChange} labelText="Uzmanlık Alanınız" type="text" placeholder="..." />
                    <InputNormal id="liveCity" onChangeMethod={this.inputChange} labelText="Yaşadığınız Şehir" type="text" placeholder="Yaşadığınız şehir" />
                    <InputNormal id="liveTown" onChangeMethod={this.inputChange} labelText="Yaşadığınız İlçe" type="text" placeholder="Yaşadığınız ilçe" />
                    <PhoneNumberInput id="phoneNumber" onChangeMethod={this.inputChange} />
                    <InputNormal id="email" onChangeMethod={this.inputChange} labelText="Email" type="email" placeholder="Email" />
                    <InputNormal id="emailRepeat" onChangeMethod={this.inputChange} labelText="Email tekrar" type="email" placeholder="Email tekrar" />
                    <InputNormal id="password" onChangeMethod={this.inputChange} labelText="Parolanız" type="password" placeholder="Parolanız" />
                    <InputNormal id="passwordRepeat" onChangeMethod={this.inputChange} labelText="Parolanız tekrar" type="password" placeholder="Parolanız tekrar" />
                    {this.inputChange}
                    <InputWithBtn labelText="Profil Fotoğrafını Seçiniz." type="text" activity="disabled" placeholder="yol" buttonText="Seç" />

                    <button type="submit" className="btn btn-primary">Kayıt Ol</button>
                </form>
                {this.state.hasError ? <Error /> : null}
                {this.state.hasPassEmailMatchError ? <PassEmailErr /> : null}
                {!this.state.alreadyRegistered ? <AlreadyRegistered /> : this.state.successRegistered  ? <AlreadyRegistered /> : null }
                <p>
                    Zaten kaydınız var mı?<br />
                    Giriş yapmak için <b><u><a style={{ fontSize: "18px" }} href="#" onClick={e => {
                        e.preventDefault();
                        this.props.onViewChange(1)
                    }}>tıklayınız</a></u></b>.
                </p>
            </div>

        )
    }

}
export default SignUpView