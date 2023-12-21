# Étape 1: Utilisez une image de base officielle Node.js
FROM node:14

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copiez le fichier package.json et package-lock.json (si disponible)
COPY package*.json ./

# Installez les dépendances du projet
RUN npm install

# Copiez les fichiers et dossiers du projet dans le répertoire de travail
COPY . .

# Exposez le port sur lequel votre app va s'exécuter
EXPOSE 3000

# Définissez la commande pour exécuter votre app
CMD ["node", "CMD"]
