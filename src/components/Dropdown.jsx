import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
const menuData = [{ title: "Home" }, { title: "About" }, { title: "Projects" }];
const DropdwonContainer = styled.div`
  position: fixed;
  z-index: 9990099;
  background-image: url("https://tailwindcss.com/_next/static/media/hero-dark@90.a7a063e8f9d179fbd72b0b735c5797b7.jpg");
  width: 100%;
  height: 100vh;
  /* background: #161f28; */
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.4s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
const CloseIcon = styled(FaTimes)`
  color: #fff;
`;
const DropdownWrapper = styled.div``;
const Button = styled.button`
  backdrop-filter: blur(16px) saturate(121%);
  -webkit-backdrop-filter: blur(16px) saturate(121%);
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 20px;
  color: #fff;
  padding: 7px;
`;
const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-row: repeat(4, 60px);
  }
`;
const DropdownLink = styled.a`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #000d1a;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
const Dropdown = ({ toggle, isOpen }) => {
  return (
    <DropdwonContainer isOpen={isOpen} onClick={() => toggle(false)}>
      <Icon onClick={() => toggle(false)}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, id) => {
            return (
              <DropdownLink
                href={item.link}
                key={id}
                smooth={true}
                duration={500}
                exact="true"
                offset={-80}
              >
                {item.title}
              </DropdownLink>
            );
          })}
        </DropdownMenu>
        <BtnWrap>
          <Button primary="true" round="true" to="#contact">
            Contact us
          </Button>
        </BtnWrap>
      </DropdownWrapper>
    </DropdwonContainer>
  );
};

export default Dropdown;
