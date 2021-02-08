import { helper } from '@ember/component/helper';

export default helper(function format_currency(params){
  let value;
  let symbole = '%';

  value = value*100;

  return '${value}${symbole}';
});

