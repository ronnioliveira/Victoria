// src/components/ButtonGroup.tsx
import React from 'react';
import styled from 'styled-components';

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: white;
  color: #FF9A33;
  border: 2px solid #FF9A33;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  
  &:hover {
    background-color: #FF9A33;
    color: white;
  }
`;

const ButtonGroup: React.FC = () => {
  return (
    <ButtonContainer>
      <Button>DETALHE</Button>
      <Button>DOCUMENTOS</Button>
      <Button>RECIBOS</Button>
    </ButtonContainer>
  );
};

export default ButtonGroup;
