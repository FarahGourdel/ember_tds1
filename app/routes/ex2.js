import Route from '@ember/routing/route';
import Services from 'td1/classes/services';
import { datas } from 'td1/data/datas';
import { action } from '@ember/object';

export default class Ex2Route extends Route {
  model(){
    return new Services(datas);
  }

  @action
  toggleActive(service){
    if(service.active){
      service = !service.active;
    }
    else {
      service.active;
    }
  }
}
