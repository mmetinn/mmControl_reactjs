import React from 'react'

class PhoneNumberInput extends React.Component {
    render(props) {
        const {id,onChangeMethod} = this.props;
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">+90</span>
                </div>
                <input id={id} onChange={onChangeMethod} type="text" className="form-control" />
            </div>
        )
    }
}

export default PhoneNumberInput
