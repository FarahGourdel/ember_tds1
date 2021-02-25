import Model, { hasMany } from '@ember-data/model';

export default class CategoryModel extends Model {
  @hasMany('string') nom;
}

