import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Ex1Controller extends Controller {
  @tracked content='Entrez votre texte';
  @tracked info='';
  MAX = 100;

  get size(){
    return this.MAX-this.content.length;
  }

  get style(){
    if (this.size>50){
      return 'info';
    }
    if(this.size>20){
      return 'warning';
    }
    return 'danger';
  }

  @action clear(){
    this.content = 'Entrez votre texte';
  }

  @action save(){
    console.log('Test save ' + this.content);
    this.info = 'Note sauvegardée';
  }

  @action update(){
    this.info = 'Note modifiée';
  }
}
