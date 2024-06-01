// src/components/Button.tsx
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: white;
  color: #FF9A33;
  border: 2px solid #FF9A33;
  border-radius: 50px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background-color: #FF9A33;
    color: white;
  }
`;

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  );
};

export default Button;