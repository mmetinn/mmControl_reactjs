import React from 'react';
import InputNormal from '../Inputs/InputNormal';
import PhoneNumberInput from '../Inputs/PhoneNumberInput';
import InputWithBtn from '../Inputs/InputWithBtn';

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
            passwordRepeat: ''
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
        // console.log(e.target.password);
    /*    if (e.target.id === "password") {
            password = e.target.value
        } if (e.target.id === "passwordRepeat") {
            passwordRepeat = e.target.value
        }        */

    }



    /* onUserClick = () => {
         console.log(this.state);
         const user = {
             name: "Muhammet METİN",
             email: "mehmetmetin436@gmail.com",
             age: 21,
             gender: "male"
         }
         this.props.loginUserData(user);
     }
 */
    onSignUp = (e) => {
        //formun normal davranısını preventdefault ile durdurduk
        //çünkü form sayfayı yaniler ve biz bunu istemiyoruz.
        e.preventDefault();
        console.log(this.state);
        const model = this.state;
        if(model.password !== model.passwordRepeat){
            alert("Şifreler uyuşmuyor")
        }if(model.email !== model.emailRepeat){
            alert("Emailler uyuşmuyor")
        }
        fetch('http://localhost:3300/v1/auth/sign-up', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(model),
        }).then(res => res.json())
            .then(res => {
                console.log("res:", res);
            })
    }

    render(props) {
        return (
            <div className="signup-container">
                <form onSubmit={this.onSignUp}>
                    <label>Doktor Musunuz?</label>
                    <select id="isDoctor" onChange={this.inputChange} className="custom-select custom-select-sm">
                        <option defaultValue>Evet</option>
                        <option value="hayır">Hayır</option>
                    </select>
                    <label>Cinsiyetiniz</label>
                    <select id="sex" onChange={this.inputChange} className="custom-select custom-select-sm">
                        <option defaultValue>Kadın</option>
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