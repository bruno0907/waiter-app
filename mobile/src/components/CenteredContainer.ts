import styled from 'styled-components/native';

interface Props {
  bgColor?: string;
}

export const CenteredContainer = styled.View<Props>`
  flex: 1;
  align-items: center;
  justify-content: center;

  ${({ bgColor }) => bgColor && `background: ${bgColor};`}

`;
