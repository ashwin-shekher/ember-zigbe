import {
  helper
} from '@ember/component/helper';

export function formatCount(args) {
  let num = +args;
  return Number((num).toFixed(1)).toLocaleString();
}

export default helper(formatCount);
