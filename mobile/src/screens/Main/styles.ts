import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === 'android';
const androidStatusBarHeight = StatusBar.currentHeight;

export const Container = styled.View`
  ${isAndroid && `margin-top: ${androidStatusBarHeight}px`};
  flex: 1;
  background: #fafafa;
`;

export const CategoriesContainer = styled.View`
  margin-top: 34px;
`;

export const MenuContainer = styled.View`
  flex: 1
`;

export const Footer = styled.View`
  min-height: 100px;
  background: #fff;
  padding: 16px 24px;
`;
