/**
 *
 * Card
 *
 */

import styled from 'styled-components';

const CardStyle = styled.div`
  width: 25%;
  height: 100%;
  display: inline-block;
  padding: 5px 15px;
  vertical-align: top;
  
  @media (max-width: 600px) {
    width: 90%;
    height: 390px;
  }
`;

export default CardStyle;
