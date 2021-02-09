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
    var selectedIds = [...select.selectedOptions].map(option => option.value);
    // Boucle if qui si l'argument en paramètre change va s'exécuter
    if (this.args.onChange) {
      // Si l'argument change, les éléments vont être filtrer dans un champ 'elm', où la fonction selectedIds va elle
      // aussi filtrer dans un champ e le tableau d'élément elm avec comme paramètre l'id sélectionnés et où la taille
      // de selectedIds ne doit pas être vide et non supérieur à 0
      this.args.onChange(this.elements.filter(elm => selectedIds.filter(e => e == elm[this.id]).length > 0));
    }
  }
}
