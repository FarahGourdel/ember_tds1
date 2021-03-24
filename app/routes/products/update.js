import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { action } from '@ember/object';

export default class ProductsUpdateRoute extends Route {
  model(params) {
    return RSVP.hash({
      product: this.store.findRecord('product', params.product_id, {
        include: 'packs',
      }),
      sections: this.store.findAll('section'),
      products: this.store.findAll('product'),
    });
  }

  @action save(product) {
    product.save().then(() => {
      this.transitionTo('products');
    });
  }
  renderTemplate() {
    this.render('products.add');
  }
}
