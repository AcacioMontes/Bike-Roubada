import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${(props) => props.disabled ? '#0000ff' : props.primary ? '#7fff00' : '#FFFFFF'};
  padding: 14px 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.disabled ? '#0000ff' : '#FA824C'};

`;