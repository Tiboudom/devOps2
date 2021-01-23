Création cluster: UI GCP

Création image docker du react
- docker build -t gcr.io/epi-devops-2/frontend:v1 .

Push image docker sur gcp
- gcloud auth configure-docker
- docker push gcr.io/epi-devops-2/frontend:v1

Créez un déploiement Kubernetes pour votre image Docker frontend.
- kubectl create deployment frontend --image=gcr.io/epi-devops-2/frontend:v1

Définissez le nombre de référence d'instances dupliquées de déploiement sur 3.
- kubectl scale deployment frontend --replicas=3

Créez une ressource HorizontalPodAutoscaler pour votre déploiement.
- kubectl autoscale deployment frontend --cpu-percent=80 --min=1 --max=5
Pour afficher les pods créés, exécutez la commande suivante :
- kubectl get pods

Utilisez la commande kubectl expose pour générer un service Kubernetes pour le déploiement hello-app.
- kubectl expose deployment frontend --name=frontend-service --type=LoadBalancer --port 80 --target-port 8080

Ici, l'option --port spécifie le numéro de port configuré sur l'équilibreur de charge, et l'option --target-port spécifie le numéro de port sur lequel le conteneur frontend écoute.

Exécutez la commande suivante pour obtenir les détails du service pour hello-app-service.
- kubectl get service
Sortie :

NAME                 CLUSTER-IP      EXTERNAL-IP     PORT(S)          AGE
hello-app-service    10.3.251.122    203.0.113.0     80:30877/TCP     10s
Copiez l'adresse EXTERNAL_IP dans le presse-papiers (par exemple, 203.0.113.0).


GET EXTERNAL IP OF NGINX INGRESS CONTROLLER
λ kubectl get service nginx-ingress-nginx-ingress -ojson --namespace epi-devops-2