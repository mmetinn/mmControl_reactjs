import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header';
export const CoreLayout = ({ children }) => (
  <div>
    { children }
 </div>
)
CoreLayout.propTypes = {
  children: PropTypes.node,
}

export default CoreLayout
