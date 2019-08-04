import React from 'react'

class InputNormal extends React.Component {
    render(props) {
        const {id,onChangeMethod,labelText,type,placeholder}=this.props;
        return (
            <div className="form-group">
                <label>{labelText}</label>
                <input id={id} type={type} onChange={onChangeMethod} className="form-control" placeholder={placeholder} />
            </div>
        )
    }
}

export default InputNormal