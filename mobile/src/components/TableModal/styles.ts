import styled from 'styled-components/native';

export const Overlay = styled.KeyboardAvoidingView`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 0 24px;
`;

export const Body = styled.View`
  padding: 24px;
  background: #fafafa;
  border-radius: 8px;
  width: 100%;
  gap: 32px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.View`
  gap: 24px;
`;

export const Input = styled.TextInput`
  padding: 16px;
  border: solid 1px rgba(204, 204, 204, 0.5);
  border-radius: 8px;
  background: #fff;
`;

