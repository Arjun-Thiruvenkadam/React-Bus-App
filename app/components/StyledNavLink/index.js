/**
 *
 * Button
 *
 */

import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledNavLink = styled(NavLink)`
  color: #0f3460;
  background-color: #66bfbf;
  text-decoration: none;
  width: 100%;
  padding: 10px 10px;
  transition-duration: 0.3s;
  transition-property: all;

  &:hover {
    font-size: large;
    width: 85px;
    height: 40px;
  }
`;

export default StyledNavLink;
