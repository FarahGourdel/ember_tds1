import Route from '@ember/routing/route';
import Categories from 'td1/classes/categories';

export default class CategoriesRoute extends Route {
  model(){
    return new Categories(this.store.findAll('category'));
  }

  afterModel(model, transition){
    // Charge tous les contacts depuis le store
    let contacts = this.get('store').findAll(contact)

    // Effectue une transition vers la première catégorie (si elle existe)
    if(model.length==0){
      store.createRecord('model');
    }
    else {
      this.transitionTo(model.get('firstObject'));
      return this.model();
    }

    // Vérifie que la route sollicitée est bien categories (et non un de ses routes enfant)
    if(transition.targetName==='categories.index'){
      return true;
    }
    else {
      return false;
    }
  }
}
