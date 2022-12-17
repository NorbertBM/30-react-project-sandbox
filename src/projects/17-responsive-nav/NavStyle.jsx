import styled from "styled-components";

export const NavStyle = styled.nav`
  /* color: #eee; */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.8rem;
  user-select: none;
  a {
    color: inherit;
  }
  .navbar-items {
    display: flex;
    justify-content: center;
    align-items: center;

    &.showNavbar {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 15px;
      margin: 15px;
      width: 100%;
    }
    & .nav-link {
      margin-right: 1rem;
      opacity: 0.8;
      padding: 0.15rem 0.35rem;
      border: 1px solid transparent;
      border-radius: 3px;
      transition: all 0.2s ease;
      &:hover {
        border: 1px solid #dddd;
      }
      &.active {
        background: #fff;
        color: black;
        transition: all 0.2s ease;
      }
    }
    &.showNavbar {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
  }
`;
