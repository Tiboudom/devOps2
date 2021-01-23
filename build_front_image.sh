cd ./MyProj-Frontend
docker build -t gcr.io/epi-devops-2/frontend:v10 ./
docker push gcr.io/epi-devops-2/frontend:v10
cd ..
read -p "Appuyez sur une touche pour continuer... "