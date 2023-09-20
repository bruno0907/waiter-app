import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
  background: #fafafa;
  gap: 24px;
`;

export const ProductImage= styled.ImageBackground`
  width: 100%;
  height: 200px;
`;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: 24px;
  right: 24px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 999px;
`;

export const Header = styled.View`
  padding: 0 24px;
  gap: 8px;
`;

export const Content = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 24px;
  gap: 8px;
`;

export const Ingredient = styled.View`
  padding: 16px;
  flex-direction: row;
  gap: 8px;
  border: solid 1px rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  margin-bottom: 8px;
`;

export const Footer = styled.View`
  min-height: 100px;
  background: #fff;
  flex-direction: row;
  padding: 16px 24px;
  align-items: center;
  justify-content: space-between;
`;

export const Price = styled.View``;
