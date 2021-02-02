import Route from '@ember/routing/route';
import { action, set } from '@ember/object';

export default class Ex1Route extends Route {
  // model hook => Retourne le model mis à disposition dans la route
  model(){
    return{
      items: [],
    };
  }

  @action save(content, model){

    model.items = content.split('\n'); // <=> model.items = content.split('\n'); // <=>
    this.transitionTo('ex1b'); // redirection vers la route ex1b
  }
}
