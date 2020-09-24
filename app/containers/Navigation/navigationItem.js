import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  font-family: 'Sacramento', cursive;
  font-size: x-large;
  font-weight: bolder;
  padding: 0px 15px;

  a {
    color: #0f3460;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
  }

  a:hover,
  a.active {
    color: #ddf3f5;
    transform: scale(1.2, 1.2);
  }
`;

const navigationItem = props => (
  <NavItem>
    <NavLink to={props.link} exact={props.exact}>
      {props.children}
    </NavLink>
  </NavItem>
);

export default navigationItem;
