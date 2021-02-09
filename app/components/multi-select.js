import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultiSelectComponent extends Component {
  // Déclare un tableau d'éléments
  @tracked elements = [];
  // Déclare un tableau nommé 'selected'
  selected = [];
  // Initialise la variable 'id' par la chaîne de caractères 'id'
  id = 'id';

  // Constructeur de la classe qui initialise chaque variable déclarée
  constructor() {
    super(...arguments);
    this.elements = this.args.elements;
    this.selected = this.args.selected;
    this.id = this.args.identifier || 'id';
  }

  // Fonction d'action appelée 'change', qui prend en paramètre 'event'
  @action
  change(event) {
    // Déclare la variable 'select' et l'initialise par l'évènement cible
    let select = event.target;

    // Déclare la variable 'selectIds' en l'initialisant par les options sélectionés et leur valeur
    // => Récupération des ids sélectionnés dans le Select HTML
    var selectedIds = [...select.selectedOptions].map(option => option.value);

    // Boucle if qui si l'argument en paramètre change va s'exécuter
    // => Appel de la fonction onChange (passée en attribut du composant)
    if (this.args.onChange) {
      // On récupère parmi les éléments, les éléments sélectionnés
      // Parmi les selectedIds on filtre uniquement ceux dont l'id correspond à l'id de l'élément
      // On prend la taille des éléments sélectionnées en regardant si la taille est supérieur à 0
      // Notation : e => e+2>0 --> Créé une fonction qui prend en paramètre e et qui retourne si e est supérieur à 0
      // => Filtrage et retour des éléments de la liste correspondant aux ids sélectionnés
      this.args.onChange(this.elements.filter(elm => selectedIds.filter(e => e == elm[this.id]).length > 0));
    }
  }
}
