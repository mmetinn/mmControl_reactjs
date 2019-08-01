import React from 'react';

const LoginView = ({ onViewChange }) => {
    return (
        <div>
            <form className="form-inline">
                <div className="form-group mb-2">
                    <input type="text" className="form-control" placeholder="email" />
                </div>
                <div className="form-group mx-sm-3 mb-2">
                    <input type="password" className="form-control" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary mb-2">Giriş Yap</button>
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

export default LoginView