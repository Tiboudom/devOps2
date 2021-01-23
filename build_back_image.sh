cd ./MyProj-backend
docker build -t gcr.io/epi-devops-2/backend:v4 ./
docker push gcr.io/epi-devops-2/backend:v4
cd ..
read -p "Appuyez sur une touche pour continuer... "