import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Step1Controller extends Controller {
  dispoItems = [];
  includedItems = [];
  @tracked dispoItems_ = [];
  @tracked includedItems_ = [];

  @action changeDispo(elements) {
    this.dispoItems_ = elements;
  }

  @action changeIncluded(elements) {
    this.includedItems_ = elements;
  }

  @action add(source, dest, what) {
    dest.pushObjects(what);
    this.includedItems_ = [];
    this.includedItems_.pushObjects(what);
    this.dispoItems_ = []
    source.removeObjects(what);
  }

  @action remove(source, dest, what) {
    dest.pushObjects(what);
    this.dispoItems_ = [];
    this.dispoItems_.pushObjects(what);
    this.includedItems_ = [];
    source.removeObjects(what);
  }

}
