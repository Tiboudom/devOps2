kubectl patch deployment backend-deployment --namespace=epi-devops-2 -p \
  '{"spec":{"template":{"spec":{"terminationGracePeriodSeconds":31}}}}'
read -p "Appuyez sur une touche pour continuer... "
