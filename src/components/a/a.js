import React from 'react';
import PropTypes from 'prop-types';

import { Link, NavLink } from 'react-router-dom';

const changeActive = (isActive) => (isActive ? {color: '#6be067'}:{});

const A = ({children, url, className, isExternalLink=false, isNavLink=false, ...props}) => {
  if(isExternalLink){
    return <a href={url} className={className} target='_blank' rel='noopener noreferrer' {...props}> {children} </a>
  }

  if(isNavLink){
    return <NavLink to={url} className={className} style={({isActive}) => changeActive(isActive)} {...props}> {children} </NavLink>
  }

  return <Link to={url} className={className} {...props}> {children} </Link>
}

A.defaultProps = {
  isExternalLink: false,
  isNavLink: false,
};

A.propTypes = {
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  isExternalLink: PropTypes.bool,
  isNavLink: PropTypes.bool,
};

export default A;
