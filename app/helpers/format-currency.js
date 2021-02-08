import { helper } from '@ember/component/helper';

export default helper(function format_currency(params){
  let value;
  let symbol = '€';
  let euro = Math.floor(value/100);
  let decimal = value % 100;

  if(decimal.toString().length === 1 ){
    decimal = '0' + decimal;
  }

  return '${euro}.${decimal}${symbol}';
});
