import React, {useContext, useState} from 'react';
import './UserOption.scss';
import ThemeContext from '../../../contexts/ThemeContext';
import {LOCALSTORAGE_TOKEN_NAME} from '../../../configurations';
import LocalStorageUtils from '../../../utils/LocalStorageUtils';

const Options = (props) => {
  const theme = useContext(ThemeContext);
  const [styles, setStyles] = useState({
    color: theme.palette.navbar.hoverColor,
  });
  const handleLogoutClick = (name) => {
    if (name === 'Logout') {
      LocalStorageUtils.deleteUser();
    }
    if (name === 'Account Setting') {
      props.onClickViewProfile();
    }
  };
  return (
    <li
      style={styles}
      onMouseOver={() => setStyles({color: theme.palette.navbar.titleColor})}
      onMouseOut={() => setStyles({color: theme.palette.navbar.hoverColor})}
    >
      <p className="options-name" onClick={() => handleLogoutClick(props.name)}>
        {props.name}
        {props.icon}
      </p>
    </li>
  );
};
export const UserOption = (props) => {
  const theme = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme.palette.userOptionDialog.backgroundColor,
  };
  const options = props.userOption.map((object) => (
    <Options
      key={object.id}
      name={object.name}
      icon={object.icon}
      onClickViewProfile={props.onClickViewProfile}
    ></Options>
  ));
  return (
    <ul
      className={
        props.isHoverUserOption ? 'options-wrapper' : 'options-wrapper toggle-option'
      }
      style={styles}
    >
      {options}
    </ul>
  );
};
export default UserOption;
