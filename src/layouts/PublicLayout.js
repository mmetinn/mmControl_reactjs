import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/Header';
export const PublicLayout = ({ children }) => (
  <div>
      <Header></Header>
    { children }
 </div>
)
PublicLayout.propTypes = {
  children: PropTypes.node,
}

export default PublicLayout
