import React from 'react';
import PropTypes from "prop-types";

const NavOptions = ({option}) => {
  return (
    <div>
      <li className="mr-6"><a href={option.path} >{option.name}</a></li>
    </div>
  );
};

NavOptions.propTypes = {
  option: PropTypes.object
}
export default NavOptions;