
# TO DO CI-CD




## Description

Timed ToDo App
Description
Timed ToDo App est une application de gestion de tâches avec une fonctionnalité de minuterie. Chaque tâche a une durée définie, et l'application permet de suivre le temps restant pour chaque tâche.

## Fonctionnalités
Ajout de tâches avec une minuterie.

Marquage des tâches comme terminées.

Affichage du temps restant pour chaque tâche.
## Technologies Utilisées
JavaScript  

Node.js

jQuery


Jest pour les tests

Installation

Clonez le dépôt et installez les dépendances.

## Bash
Copy code
```bash
git clone https://github.com/nhoss6/CICD/
```
```bash
cd timed-ToDo-app
```
```bash
npm install
```

## Configuration
Aucune configuration spéciale requise.



## Exécutez les tests avec Jest en utilisant la commande suivante.

```bash
npm test
```

## Intégration Continue (CI)
Linting du code : Utilisation d'ESLint pour garantir la qualité et la consistance du code source.
Exécution des tests unitaires : Les tests sont réalisés avec Jest pour s'assurer que chaque composant de l'application fonctionne correctement.
Validation de la construction du projet : Vérification que l'application peut être construite sans erreurs.
## Déploiement Continu (CD)
Sur la branche principale : Après le succès du processus CI, un déploiement automatique est effectué.
Environnement de déploiement : Le déploiement se fait soit sur un serveur de staging, soit sur un serveur de production, en fonction des paramètres configurés dans le workflow GitHub Actions.
Livraison Continue
## Tags Git :
La création de tags Git déclenche un processus automatique de livraison continue.
##  Publication :
Une nouvelle version du projet est publiée sur le serveur ou une plateforme de distribution appropriée.
Docker (Bonus)
## Dockerfile :
Un Dockerfile est fourni à la racine du projet pour construire une image Docker de l'application.
## Validation avec Hadolint : 
Le Dockerfile est validé avec Hadolint pour garantir le respect des meilleures pratiques Docker.
Running Tests
Pour exécuter les tests, utilisez la commande suivante :

```bash
npm test
```
## Contribution
Les contributions sont les bienvenues ! Pour contribuer, veuillez suivre les étapes suivantes :

Forker le projet.
Créer une nouvelle branche.
```bash
git checkout -b feature/AmazingFeature
```
Committer vos modifications.
```bash
git commit -m 'Add some AmazingFeature
```
Push vers la branche 
```bash
git push origin feature/AmazingFeature
```
Ouvrir une Pull Request.
## Auteur
@nhoss6


## Screenshots

![App Screenshot](https://i.ibb.co/VCPrvTq/image.png)

