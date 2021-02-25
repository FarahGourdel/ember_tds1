import Model, { belongsTo } from '@ember-data/model';

export default class ContactModel extends Model {
  @belongsTo('string') nom;
  @belongsTo('string') prenom;
  @belongsTo('string') email;
}
