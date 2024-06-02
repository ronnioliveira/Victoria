import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { FaPlus, FaMinus } from "react-icons/fa";

const Container = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const Header = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #007bff;
  margin-bottom: 10px;

  &::before {
    content: '👜';
    margin-right: 10px;
  }
`;

const InsuranceInfoContainer = styled.div`
  align-items: center;
  margin-bottom: 20px;
`;

const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const TextInfo = styled.span`
  font-size: 1rem;
  color: #ff9a33;
`;

const Text = styled.span`
  font-size: 1rem;
  color: #000;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-top: 15px
`;

interface InsuranceInfoProps {
    companyName: string | undefined;
    policyNumber: number;
    startDate: string | undefined;
    buttonLabels: string[];
    buttonHandlers: (() => void)[];
  }

const InsuranceInfo: React.FC<InsuranceInfoProps> = ({ companyName, policyNumber, startDate, buttonLabels, buttonHandlers }) => {

  const [showButtons, setShowButtons] = useState(false)

  const handleShowButtons = () => {
    setShowButtons(!showButtons);
  }

  return (
    <Container>
      <Header>Acidentes de Trabalho</Header>
      <hr />
      <InsuranceInfoContainer>
        <InfoTextContainer>
            <TextInfo>{companyName}</TextInfo>
            <Text>Apólice {policyNumber}</Text>
            <Text>Data início {startDate}</Text>
            {showButtons ? (
              <FaPlus onClick={handleShowButtons} color='#007bff'/>  
            ) : (
              <FaMinus onClick={handleShowButtons} color='#007bff'/>          
            )}
        </InfoTextContainer>
      </InsuranceInfoContainer>
      {showButtons && (
        <ButtonContainer>
            {buttonLabels.map((label, index) => (
                <Button key={index} text={label} onClick={buttonHandlers[index]} />
            ))}
        </ButtonContainer>
      )}    
    </Container>
  );
};

export default InsuranceInfo;
