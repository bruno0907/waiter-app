import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0,0,0,.2);
  backdrop-filter: blur(1px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  flex: 1;
  max-width: 30rem;
  min-height: 6rem;
  background-color: #fff;
  border-radius: .5rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
      color: #333;
    }

    button {
      top: 1.7rem;
      right: 1.7rem;
      cursor: pointer;
      padding: .5rem;
      background: none;
      border: none;

      &:hover {
        opacity: .7;
      }
    }

  }

  .status {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    span {
      font-size: .875rem;
      color: #666;
      opacity: .8;
    }
  }

  > ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    li {
      display: flex;
      font-size: .875rem;

      img {
        margin-right: 1rem;
        border-radius: 0.25rem;
        width: 3.5rem;
        height: 2.5rem;
        object-fit: cover;

      }

      span {
        color: #666;
        margin-right: .3rem;
      }

      div {
        display: flex;
        flex-direction: column;
        gap: .3rem;
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  > footer {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
      background: none;
      border: none;
      font-weight: bold;
      padding: .8rem 1.6rem;
      border-radius: 1.5rem;

      &:hover {
        opacity: .8;
      }

      &.primary {
        background-color: #313131;
        color: #fff;
      }
      &.secondary {
        color: #D73035;
      }
    }
  }
`;
