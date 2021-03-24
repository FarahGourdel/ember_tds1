import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsAddRoute extends Route {
  model() {
    return RSVP.hash({
      secction: {},
      sections: this.store.findAll('section'),
      products: this.store.findAll('product'),
    });
  }

  @action save(data) {
    let section = this.store.createRecord('section', data);
    section.save().then(() => {
      this.transitionTo('sections');
    });
  }
}
