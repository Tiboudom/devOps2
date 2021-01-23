###
### Première partie : Compilation du code Typescript
###
FROM node:10.15-jessie-slim as tsc-builder
WORKDIR /usr/src/app

# Installation des dépendances et build.
COPY . .
RUN yarn install && yarn run build

###
### Construction de l'image de production (2ème partie)
###
FROM node:10.15-jessie-slim as runtime-container
# On copie les sources compilées depuis la première étape
ENV SERVER_PORT=8081
ENV SERVER_HOST=0.0.0.0
ENV MONGO_USERNAME=tibo
ENV MONGO_PASSWORD=olivier
ENV MONGO_DATABASE=epi-devops-2
ENV MONGO_HOST=epi-devops-db.3s1f1.mongodb.net

WORKDIR /usr/src/app
COPY --from=tsc-builder /usr/src/app/dist ./dist
COPY --from=tsc-builder ["/usr/src/app/package.json", "/usr/src/app/yarn.lock", "./"]

# Installation des modules de production seulement
RUN yarn install --prod

# On expose le port 4000 en sortie
EXPOSE 8081

# La commande de lancement
CMD [ "node", "./dist/index.js" ]