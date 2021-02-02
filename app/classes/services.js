export default class Services {
  services = [];

  constructor(serv) {
    this.services = serv;
  }

  get countActive(){
    return this.services.filterBy('active',true).length;
  }

  get sumActive(){
    let sum = 0;
    let actifs = this.services.filterBy('active',true);
    actifs.forEach(s => {sum += s.price;});
    return sum;
  }
}
