import { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Container } from './styles';

interface Props extends TouchableOpacityProps {
  children: ReactNode;
}

export function Button ({ children, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} {...rest}>
      {children}
    </Container>
  );
}
