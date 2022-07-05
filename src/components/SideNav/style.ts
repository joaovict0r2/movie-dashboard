import styled from "styled-components";

export const Container = styled.div`
  padding: 30px 0 30px 30px;
  background-color: ${({ theme }) => theme.colors.background.light};

  header {
    margin-bottom: 60px;

    p {
      font-family: "Open Sans", sans-serif;
    }

    p:nth-child(1) {
      line-height: 32px;
      font-size: 32px;
      font-weight: 800;
    }

    p:nth-child(2) {
      line-height: 18px;
      font-size: 18px;
      font-weight: 700;
      margin-left: 3px;
    }
  }
`;

export const ItemsContainer = styled.div`
  p {
    margin-bottom: 14px;
  }
`;

export const NavItem = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;

  & + & {
    margin-top: 14px;
  }

  img {
    margin-right: 12px;
  }
`;
