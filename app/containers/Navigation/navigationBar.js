/*
 *
 *
 * NavigationBar
 *
 */

import styled from 'styled-components';

const NavigationBar = styled.div`
  height: 70px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #66bfbf;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;
`;

export default NavigationBar;
