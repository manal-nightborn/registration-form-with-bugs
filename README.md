# Formulaire d'Inscription React avec React Hook Form

Cette application est un formulaire d'inscription développé avec React et React Hook Form. Elle permet aux utilisateurs de s'inscrire en fournissant leurs informations personnelles avec une validation des champs en temps réel.

## Fonctionnalités

- **Validation des champs en temps réel** : Les erreurs sont affichées immédiatement lorsque l'utilisateur quitte un champ ou soumet le formulaire.
- **Validation d'email** : Vérifie que l'adresse email est dans un format valide.
- **Validation de mot de passe** : Exige un mot de passe d'au moins 8 caractères.
- **Confirmation de mot de passe** : Vérifie que les deux mots de passe saisis correspondent.
- **Validation d'âge** : S'assure que l'utilisateur a au moins 18 ans.
- **Conditions d'utilisation** : L'utilisateur doit accepter les conditions d'utilisation pour s'inscrire.
- **Résumé des erreurs** : Affiche un résumé de toutes les erreurs en haut du formulaire.
- **Feedback visuel** : Les champs avec erreurs sont mis en évidence en rouge.

## Structure de l'application

L'application est structurée en plusieurs composants React :

- **App** : Le composant principal qui contient le formulaire d'inscription.
- **RegistrationForm** : Gère la logique du formulaire, la validation et la soumission.
- **FormField** : Composant réutilisable pour les champs du formulaire avec gestion des erreurs.

## Technologies utilisées

- React (Hooks)
- React Hook Form pour la gestion du formulaire et la validation
- Styled Components pour le styling
- JavaScript (ES6+)

## Comportement attendu

1. Tous les champs sont obligatoires.
2. Le prénom et le nom doivent contenir au moins 2 caractères.
3. L'email doit être dans un format valide (xxx@xxx.xxx).
4. Le mot de passe doit contenir au moins 8 caractères.
5. La confirmation du mot de passe doit correspondre au mot de passe.
6. L'âge doit être d'au moins 18 ans et au maximum 120 ans.
7. L'utilisateur doit accepter les conditions d'utilisation.
8. Le formulaire ne peut pas être soumis s'il contient des erreurs.
9. Après une soumission réussie, les données sont affichées dans la console.

## Installation et démarrage

1. Clonez ce dépôt
2. Installez les dépendances avec `npm install`
3. Démarrez l'application avec `npm start`
4. Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur
