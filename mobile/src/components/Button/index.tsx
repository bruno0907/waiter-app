import { ReactNode } from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { Container } from './styles';

interface Props extends TouchableOpacityProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary'
  isLoading?: boolean;
}

const loaderColors = {
  primary: '#fff',
  secondary: '#d73036',
};

export function Button ({ children, variant = 'primary', isLoading = false, ...rest }: Props) {
  return (
    <Container activeOpacity={0.7} variant={variant} {...rest}>
      {isLoading && <ActivityIndicator color={loaderColors[variant]} />}
      {!isLoading && children}
    </Container>
  );
}
