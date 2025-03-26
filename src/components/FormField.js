import React from 'react';
import styled from 'styled-components';

const FieldContainer = styled.div`
  margin-bottom: 5px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
  color: #333;
`;

const InputContainer = styled.div`
  position: relative;
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid ${props => props.hasError ? '#e57373' : '#ddd'};
    border-radius: 4px;
    font-size: 16px;
    
    &:focus {
      outline: none;
      border-color: ${props => props.hasError ? '#e57373' : '#4caf50'};
      box-shadow: 0 0 0 2px ${props => props.hasError ? 'rgba(229, 115, 115, 0.2)' : 'rgba(76, 175, 80, 0.2)'};
    }
  }
`;

// Bug 3: Les messages d'erreur de validation ne s'affichent pas correctement
// Le composant ErrorMessage est défini mais n'est pas utilisé correctement
const ErrorMessage = styled.div`
  color: #e57373;
  font-size: 14px;
  margin-top: 5px;
`;

function FormField({ label, children, error }) {
  // Bug 3: Le message d'erreur n'est pas affiché correctement
  // La variable errorMessage est définie mais n'est pas utilisée dans le rendu
  const errorMessage = error ? <ErrorMessage>{error}</ErrorMessage> : null;
  
  return (
    <FieldContainer>
      {label && <Label>{label}</Label>}
      <InputContainer hasError={!!error}>
        {children}
        {/* Bug 3: Le message d'erreur devrait être affiché ici */}
        {/* Manquant: {errorMessage} */}
      </InputContainer>
    </FieldContainer>
  );
}

export default FormField;
