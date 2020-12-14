import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    border-radius: 0.5rem;
    border: 1px solid #d2d6dc;
    padding: 1.5 rem;
    box-shadow: 0 1px 5px rgb(0 0 0 0.15);
    display: inline-flex;
    flex-direction: column; 
    align-items: center;
    font-family; sans-serif;
    width: 14rem;
`;

const Name = styled.p`
  margin: 1rem 0 0 ;
  font-weight: bold;
`;

const Role = styled.p`
    margin: 0.5rem 0 0 ;
    font-size: 0.87rem;
    color: #6b7280;
`;

const Avatar = styled.img`
   border-radius: 50%;
   width: 8rem;
`;

const Card = ({ name, role, avatar }) => {
  return (
    <Wrapper>
      <Avatar src={avatar}></Avatar>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Wrapper>
  );
};

export default Card;
