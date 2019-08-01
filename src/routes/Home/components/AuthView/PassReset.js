import React from 'react';
import InputNormal from '../Inputs/InputNormal';
import InputWithBtn from '../Inputs/InputWithBtn';

const PassReset = (props) => (
    <div className="signup-container">
        <form className="form-inline">
        <div className="form-group">
                <input style={{width:"378px",marginRight:"10px"}} type="text" className="form-control" placeholder="Email" />
            </div>
            <button type="submit" className="btn btn-primary">Parolanı Sıfırla</button>

            <p>
                Giriş yapmak için <b><u><a style={{ fontSize: "18px" }} href="#" onClick={e => {
                    e.preventDefault();
                    props.onViewChange(1)
                }}>tıklayınız</a></u></b>.
            </p>
        </form>
    </div>
)
export default PassReset;