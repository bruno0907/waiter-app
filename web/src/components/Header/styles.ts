import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  min-width: 50rem;
  background: #D73035;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 12.5rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 76rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;

  .page-details {
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: .375rem;

    h1 {
      font-size: 2rem
    }
    h2 {
      font-size: 1rem;
      font-weight: 400;
      opacity: .9;
    }
  }
`;
