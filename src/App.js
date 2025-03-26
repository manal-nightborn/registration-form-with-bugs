import React from 'react';
import styled from 'styled-components';
import RegistrationForm from './components/RegistrationForm';

const AppContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
  margin-bottom: 30px;
`;

function App() {
  const handleRegistration = (data) => {
    console.log('Données d\'inscription soumises:', data);
    alert('Inscription réussie! Consultez la console pour voir les données.');
  };

  return (
    <AppContainer>
      <Header>Formulaire d'Inscription</Header>
      <RegistrationForm onSubmit={handleRegistration} />
    </AppContainer>
  );
}

export default App;
