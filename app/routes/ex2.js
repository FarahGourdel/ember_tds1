import Route from '@ember/routing/route';
import Services from 'td1/classes/services';
import { datas } from 'td1/data/datas';

export default class Ex2Route extends Route {
  model(){
    return new Services(datas);
  }
}
