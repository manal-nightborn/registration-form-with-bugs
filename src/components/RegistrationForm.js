import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import FormField from './FormField';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 10px;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const ErrorSummary = styled.div`
  background-color: #ffebee;
  color: #c62828;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const ErrorList = styled.ul`
  margin: 5px 0;
  padding-left: 20px;
`;

function RegistrationForm({ onSubmit }) {
  // Bug 2: Le champ 'password' n'est pas correctement initialisé dans defaultValues
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      // password manquant ici
      confirmPassword: '',
      age: '',
      terms: false
    }
  });

  // État pour stocker toutes les erreurs pour l'affichage
  const [formErrors, setFormErrors] = useState([]);

  // Bug 5: Composant qui se re-render inutilement à chaque frappe
  // Cet état n'est pas nécessaire et provoque des re-renders inutiles
  const [inputValues, setInputValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    age: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Bug 6: Fonction map sans return dans l'affichage des erreurs
  const renderErrors = () => {
    if (Object.keys(errors).length > 0) {
      // Bug: Pas de return ici
      Object.entries(errors).map(([field, error]) => {
        <li key={field}>{field}: {error.message}</li>
      });
    }
    return null;
  };

  // Bug 4: Le formulaire peut être soumis même quand il est invalide
  // Pas de vérification de validité avant la soumission
  const onSubmitForm = (data) => {
    // Devrait vérifier si le formulaire est valide avant de soumettre
    onSubmit(data);
  };

  const password = watch('password');

  return (
    <>
      {Object.keys(errors).length > 0 && (
        <ErrorSummary>
          <h4>Veuillez corriger les erreurs suivantes:</h4>
          <ErrorList>
            {renderErrors()}
          </ErrorList>
        </ErrorSummary>
      )}

      <Form onSubmit={handleSubmit(onSubmitForm)}>
        <FormField
          label="Prénom"
          error={errors.firstName?.message}
        >
          <input
            {...register('firstName', { 
              required: 'Le prénom est requis',
              minLength: { value: 2, message: 'Le prénom doit contenir au moins 2 caractères' }
            })}
            onChange={handleInputChange}
            placeholder="Votre prénom"
          />
        </FormField>

        <FormField
          label="Nom"
          error={errors.lastName?.message}
        >
          <input
            {...register('lastName', { 
              required: 'Le nom est requis',
              minLength: { value: 2, message: 'Le nom doit contenir au moins 2 caractères' }
            })}
            onChange={handleInputChange}
            placeholder="Votre nom"
          />
        </FormField>

        <FormField
          label="Email"
          error={errors.email?.message}
        >
          <input
            {...register('email', { 
              required: 'L\'email est requis',
              // Bug 1: Validation incorrecte pour l'email
              // Utilisation d'une regex incorrecte qui accepte des emails invalides
              pattern: { 
                value: /\S+@\S+/, 
                message: 'Veuillez entrer un email valide' 
              }
            })}
            onChange={handleInputChange}
            placeholder="votre.email@exemple.com"
          />
        </FormField>

        <FormField
          label="Mot de passe"
          error={errors.password?.message}
        >
          <input
            type="password"
            {...register('password', { 
              required: 'Le mot de passe est requis',
              minLength: { value: 8, message: 'Le mot de passe doit contenir au moins 8 caractères' }
            })}
            onChange={handleInputChange}
            placeholder="Votre mot de passe"
          />
        </FormField>

        <FormField
          label="Confirmer le mot de passe"
          error={errors.confirmPassword?.message}
        >
          <input
            type="password"
            {...register('confirmPassword', { 
              required: 'Veuillez confirmer votre mot de passe',
              validate: value => value === password || 'Les mots de passe ne correspondent pas'
            })}
            onChange={handleInputChange}
            placeholder="Confirmez votre mot de passe"
          />
        </FormField>

        <FormField
          label="Âge"
          error={errors.age?.message}
        >
          <input
            type="number"
            {...register('age', { 
              required: 'L\'âge est requis',
              min: { value: 18, message: 'Vous devez avoir au moins 18 ans' },
              max: { value: 120, message: 'Veuillez entrer un âge valide' }
            })}
            onChange={handleInputChange}
            placeholder="Votre âge"
          />
        </FormField>

        <FormField
          error={errors.terms?.message}
        >
          <label>
            <input
              type="checkbox"
              {...register('terms', { 
                required: 'Vous devez accepter les conditions d\'utilisation'
              })}
            />
            J'accepte les conditions d'utilisation
          </label>
        </FormField>

        <SubmitButton type="submit">
          S'inscrire
        </SubmitButton>
      </Form>
    </>
  );
}

export default RegistrationForm;
