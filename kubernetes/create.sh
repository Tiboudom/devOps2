kubectl config set-context --current --namespace=epi-devops-2

kubectl apply -f namespace.yaml
helm install nginx-ingress nginx-stable/nginx-ingress --namespace epi-devops-2

kubectl apply -f frontend.service.yaml
kubectl apply -f backend.service.yaml
kubectl apply -f ingress.yaml

kubectl config set-context --current --namespace=default

read -p "Appuyez sur une touche pour continuer... "