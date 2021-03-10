import React from 'react';
// FA icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic } from '@fortawesome/free-solid-svg-icons';

const Nav = ({ isOpen, setIsOpen }) => {
  const toggleHandler = () => setIsOpen(!isOpen);

  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={toggleHandler}>
        <span>Literary</span>
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
