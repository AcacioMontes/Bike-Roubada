import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background: ${(props) => props.disabled ? '#FF0000' : props.primary ? '#FF0000' : '#FFFFFF'};
  padding: 14px 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${(props) => props.disabled ? '#FFFFFF' : '#FA824C'};

`;