kubectl config set-context --current --namespace=epi-devops-2

kubectl delete service frontend-service
kubectl delete deployment frontend-deployment
kubectl delete service backend-service
kubectl delete deployment backend-deployment
kubectl delete -f ingress.yaml
kubectl delete -f namespace.yaml

kubectl config set-context --current --namespace=default
read -p "Appuyez sur une touche pour continuer... "