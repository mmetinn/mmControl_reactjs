import React from 'react';
import InputNormal from '../Inputs/InputNormal';
import PhoneNumberInput from '../Inputs/PhoneNumberInput';
import InputWithBtn from '../Inputs/InputWithBtn';

const SignUpView = (props) => {
    return (
        <div className="signup-container">
            <form>
                <label>Doktor Musunuz?</label>
                <select className="custom-select custom-select-sm">
                    <option defaultValue>Evet</option>
                    <option value="1">Hayır</option>
                </select>
                <label>Cinsiyetiniz</label>
                <select className="custom-select custom-select-sm">
                    <option defaultValue>Kadın</option>
                    <option value="1">Erkek</option>
                </select>
                <label>Ünvanınız</label>
                <select className="custom-select custom-select-sm">
                    <option defaultValue>Ünvan1</option>
                    <option value="1">Ünvan2</option>
                    <option value="2">Ünvan3</option>
                    <option value="3">Ünvan4</option>
                    <option value="4">Ünvan5</option>
                    <option value="5">Ünvan6</option>
                </select>
                <InputNormal labelText="Adınız" type="text" placeholder="Adınız"/>
                <InputNormal labelText="Soyadınız" type="text" placeholder="Soyadınız"/>
                <InputNormal labelText="Doğum Tarihiniz" type="text" placeholder="12/12/12"/>
                <InputNormal labelText="Çalıştığınız Hastane veya Muayenehane" type="text" placeholder="... Hastanesi|Muayenehanesi"/>
                <InputNormal labelText="Uzmanlık Alanınız" type="text" placeholder="..."/>
                <InputNormal labelText="Yaşadığınız Şehir" type="text" placeholder="Yaşadığınız şehir"/>
                <InputNormal labelText="Yaşadığınız İlçe" type="text" placeholder="Yaşadığınız ilçe"/>
                <PhoneNumberInput/>
                <InputNormal labelText="Email" type="email" placeholder="Email"/>
                <InputNormal labelText="Email tekrar" type="email" placeholder="Email tekrar"/>
                <InputNormal labelText="Parolanız" type="password" placeholder="Parolanız"/>
                <InputNormal labelText="Parolanız tekrar" type="password" placeholder="Parolanız tekrar"/>
                <InputWithBtn labelText="Profil Fotoğrafını Seçiniz." type="text" activity="disabled" placeholder="yol" buttonText="Seç"/>
               
                <button type="submit" className="btn btn-primary">Kayıt Ol</button>
            </form>
            <p>
                Zaten kaydınız var mı?<br />
                Giriş yapmak için <b><u><a style={{fontSize: "18px"}} href="#" onClick={e => {
                    e.preventDefault();
                    props.onViewChange(1)
                }}>tıklayınız</a></u></b>.
            </p>
        </div>

    )
}
export default SignUpView