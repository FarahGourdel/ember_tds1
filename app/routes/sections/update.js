import Route from '@ember/routing/route';
import { action } from '@ember/object';
import RSVP from 'rsvp';

export default class SectionsUpdateRoute extends Route {
  model(params) {
    return RSVP.hash({
      section: this.store.findAll('section', params.section_id, {
        include: 'packs',
      }),
      sections: this.store.findAll('section'),
      products: this.store.findAll('product'),
    });
  }

  @action save(section) {
    section.save().then(() => {
      this.transitionTo('sections');
    });
  }
  renderTemplate() {
    this.render('sections.add');
  }
}
