/**
 *
 * Image
 *
 */

import styled from 'styled-components';

const Image = styled.img`
  width: 30%;
  @media only screen and (max-width: 768px) {
    {
      width: 60%;
    }
  }
`;

export default Image;
