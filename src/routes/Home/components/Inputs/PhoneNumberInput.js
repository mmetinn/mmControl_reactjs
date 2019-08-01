import React from 'react'

class PhoneNumberInput extends React.Component {
    render() {
        return (
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text">+90</span>
                </div>
                <input type="text" className="form-control" />
            </div>
        )
    }
}

export default PhoneNumberInput
