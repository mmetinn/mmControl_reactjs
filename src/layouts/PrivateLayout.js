import React from 'react'
import PropTypes from 'prop-types'
export const PrivateLayout = ({ children }) => (
  <div>
      <h1>Private Layout</h1>
    { children }
 </div>
)
PrivateLayout.propTypes = {
  children: PropTypes.node,
}

export default PrivateLayout
