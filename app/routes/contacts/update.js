import Route from '@ember/routing/route';
import { action } from '@ember/object';

export default class ContactsUpdateRoute extends Route {

  model(params){
    return this.store.find('contact', params.contact_id);
  }

  renderTemplate() {
    this.render('contacts.add');
  }

  @action update(contact){

  }

}
