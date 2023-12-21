module.exports = {
    env: {
      browser: true, // Si vous avez du code s'exécutant dans le navigateur
      es2021: true, // Support pour ES6 et versions ultérieures
      node: true, // Environnement Node.js
      jest: true // Si vous utilisez Jest pour les tests
    },
    extends: [
      'eslint:recommended', // Ensemble de règles recommandées par ESLint
      // Ajoutez d'autres configurations si nécessaire, par exemple 'airbnb' ou 'prettier'
    ],
    parserOptions: {
      ecmaVersion: 12, // Supporte ES2021
      sourceType: 'module' // Supporte les modules ES6
    },
    rules: {
      // Ici, vous pouvez ajouter ou redéfinir des règles spécifiques
      // Par exemple, pour désactiver la règle sur l'utilisation des console.log :
      'no-console': 'off',
      // Autres règles personnalisées si nécessaire...
    }
  };
  