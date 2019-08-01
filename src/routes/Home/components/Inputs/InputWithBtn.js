import React from 'react'

class InputWithBtn extends React.Component {
    render(props) {
        const { labelText,type, activity, placeholder, buttonText } = this.props;
        return (
            <div className="form-group">
                <label>{labelText}</label>
                <div className="input-group-append">
                    <input disabled={activity} type={type} className="form-control" placeholder={placeholder}/>
                    <button className="btn btn-outline-secondary" type="button">{buttonText}</button>
                </div>
            </div>
        )
    }
}

export default InputWithBtn