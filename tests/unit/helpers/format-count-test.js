import {
  formatCount
} from 'ember-zigbe/helpers/format-count';
import {
  module,
  test
} from 'qunit';
import {
  setupTest
} from 'ember-qunit';

module('Unit | Helper | format-count', function (hooks) {
  setupTest(hooks);

  test('it works', function (assert) {
    assert.equal(formatCount(100), '100', '3 Digit Format');
    assert.equal(formatCount(121212), '121,212', '6 Digit Format');
    assert.equal(formatCount(121212122), '121,212,122', '9 Digit Format');
    assert.equal(formatCount(121212122111), '121,212,122,111', '12 Digit Format');
  });
});
