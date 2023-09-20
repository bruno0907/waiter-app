import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const Product = styled.View`
  flex-direction: row;
  padding: 8px 0;
  gap: 4px;
`;

export const Image = styled.Image`
  width: 48px;
  height: 40px;
  border-radius: 6px;
  margin-right: 8px;
`;

export const Details = styled.View`
  gap: 4px;
  flex: 1;
`;

export const Actions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
`;

export const Footer = styled.View`
  flex-direction: row;
  padding: 16px 0;
  align-items: center;
  justify-content: space-between;
`;

export const Total = styled.View`
  text-align: start;
`;
