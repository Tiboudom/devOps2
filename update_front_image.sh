kubectl patch deployment frontend-deployment --namespace=epi-devops-2 -p \
  '{"spec":{"template":{"spec":{"terminationGracePeriodSeconds":31}}}}'
read -p "Appuyez sur une touche pour continuer... "
