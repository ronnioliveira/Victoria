import React from 'react';
import logo from './logo.svg';
import './App.css';
import InsuranceInfo from './components/InsuranceInfo';
import styled from 'styled-components';
import clientDetailsMock from './mocks/clientDetailsMock';


const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f9fa;
`;


function App() {

  const handleDetailClick = () => {
    console.log('clicou detalhe')
    alert('Detalhe clicked');
  };

  const handleDocumentsClick = () => {
    alert('Documentos clicked');
  };

  const handleReceiptsClick = () => {
    alert('Recibos clicked');
  };

  const clientDetails = clientDetailsMock;
  const client = clientDetails.user.products.filter(x => x.aggregatorCode == '0001');


  const filterProduct = (products : any) => {
    products.filter(x => x.aggregatorCode == '0001')
  }

  console.log('client', client)

  console.log('clientDetails', clientDetails)

  return (
    <AppContainer>      
      <InsuranceInfo 
        companyName={client.policies[0].objectReference}
        policyNumber={() => filterProduct(clientDetails.user.products)}
        startDate='08/07/2020'
        buttonLabels={["DETALHE", "DOCUMENTOS", "RECIBOS"]}
        showButtons={true}
        buttonHandlers={[handleDetailClick, handleDocumentsClick, handleReceiptsClick]}
      />
    </AppContainer>
  );
}

export default App;
