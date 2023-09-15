import styled from "styled-components";

export const Board = styled.div`
  flex: 1;
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, .4);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  header {
    padding: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    gap: .5rem;
  }
  `;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  button {
    background: #fff;
    height: 8rem;
    border: 1px solid rgba(204, 204, 204, .4);
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .25rem;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      color: #666;
    }
  }
`;
