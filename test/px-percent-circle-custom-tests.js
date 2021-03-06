/**
 * @license
 * Copyright (c) 2018, General Electric
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

suite('Custom Automation Tests for a default px-percent-circle', function() {
  test('Check default value of first px-percent-circle', function(done){
    var percentEl = Polymer.dom(document).querySelector('#px-percent-circle-1'),
        percentValue = percentEl.val,
        percentLabel = percentEl._percent;
    assert.equal(percentValue, '0');
    assert.equal(percentLabel, '0');
    done();
  });
  test('Check calculated value of second px-percent-circle', function(done){
    var percentEl = Polymer.dom(document).querySelector('#px-percent-circle-2'),
        percentValue = percentEl.val,
        percentLabel = percentEl._percent;
    assert.equal(percentValue, '10');
    assert.equal(percentLabel, '20');  // 10 / 50 = 20%
    done();
  });
  test('Check negative value of third px-percent-circle', function(done){
    var percentEl = Polymer.dom(document).querySelector('#px-percent-circle-3'),
        percentValue = percentEl.val,
        percentLabel = percentEl._percent;
    assert.equal(percentValue, '-10');
    assert.equal(percentLabel, '0');
    done();
  });
  test('Check default value of fourth px-percent-circle', function(done){
    var percentEl = Polymer.dom(document).querySelector('#px-percent-circle-4'),
        percentValue = percentEl.val,
        percentLabel = percentEl._percent;
    assert.equal(percentValue, '100');
    assert.equal(percentLabel, '100');
    done();
  });
  test('Check default value of fourth px-percent-circle', function(done){
    var percentEl = Polymer.dom(document).querySelector('#px-percent-circle-5'),
        percentValue = percentEl.val,
        percentLabel = percentEl._percent;
    assert.equal(percentValue, '20');
    assert.equal(percentLabel, '100');
    done();
  });
  test('Check px-percent-circle viewbox dimensions correctly set', done => {
    let percentEl = Polymer.dom(document).querySelector('#px-percent-circle-5');
    flush(()=>{
      let elHeight = Polymer.dom(percentEl.root).querySelector('svg').viewBox.baseVal.height;
      let elWidth = Polymer.dom(percentEl.root).querySelector('svg').viewBox.baseVal.width;
      console.log(elWidth, elHeight);
      assert.equal(elHeight, 300, 'Element height is 300');
      assert.equal(elWidth, 300, 'Element width is 300');
      done();
    })
  });
});
