
import './App.css';
import InsuranceInfo from './components/InsuranceInfo';

import clientDetailsMock from './mocks/clientDetailsMock';
import Test from "./components/Test";





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
  const client = clientDetails.user.products.filter(x => x.aggregatorCode === '0001');


  // const filterProduct = (products : any) => {
  //   products.filter(x => x.aggregatorCode == '0001')
  // }

  console.log('client', client)

  console.log('clientDetails', clientDetails)

  return (

      <div>
        <InsuranceInfo
            companyName= {client[0].policies[0].objectReference}
            policyNumber={client[0].policies[0].policyNumber}
            startDate='08/07/2020'
            buttonLabels={["DETALHE", "DOCUMENTOS", "RECIBOS"]}
            buttonHandlers={[handleDetailClick, handleDocumentsClick, handleReceiptsClick]}
        />
      </div>
  );
}

export default App;
