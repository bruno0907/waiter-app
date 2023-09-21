import styled from 'styled-components/native';

interface Props {
  variant?: 'primary' | 'secondary'
}

const buttonBgColors = {
  primary: '#d73036',
  secondary: '#fff',
};

export const Container = styled.TouchableOpacity<Props>`
  padding: 14px 24px;
  background: ${({ disabled, variant }) => disabled ? 'rgba(0, 0, 0, 0.2)' : buttonBgColors[variant]};
  border-radius: 48px;
  align-items: center;
  justify-content: center;
  gap: 4px;

`;
