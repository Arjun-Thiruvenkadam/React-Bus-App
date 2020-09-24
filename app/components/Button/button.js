import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => {
    switch (props.btnType) {
      case 'Success':
        return '#5C9210';
      case 'Danger':
        return '#944317';
      case 'Disabled':
        return 'grey';
      default:
        return 'white';
    }
  }};
  outline: none;
  cursor: pointer;
  font: inherit;
  padding: 10px;
  margin: 10px;
  font-weight: bold;

  &:hover {
    transform: scale(1.1, 1.1);
  }
`;

export default StyledButton;
