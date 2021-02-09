import { helper } from '@ember/component/helper';

export default helper(function arrayContains(params/*, hash*/) {
  // Déclare les 3 paramètres utilisés par le helper : ici items, value et prop
  const [items, value,prop] = params;
  // Déclare une variable 'id', initialisé par prop ou par la chaîne de caractères 'id'
  let id=prop ||'id'
  // Retourne les items filtrés par id et par value, et dont la taille est supérieur à 0
  return items.filterBy(id,value).length > 0;
});
