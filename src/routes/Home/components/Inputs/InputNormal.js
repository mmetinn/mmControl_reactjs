import React from 'react'

class InputNormal extends React.Component {
    render(props) {
        const {labelText,type,placeholder}=this.props;
        return (
            <div className="form-group">
                <label>{labelText}</label>
                <input type={type} className="form-control" placeholder={placeholder} />
            </div>
        )
    }
}

export default InputNormal