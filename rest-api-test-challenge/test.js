var assert = require('assert');
const frisby = require('frisby');

describe('Rest Api Tests', function () {

  it('Get specific post with id 1', function () {
    var postId = 1;
    return frisby.get('http://localhost:3000/posts/' + postId)
      .expect('status', 200)
      .then(function(result) {
        assert.equal('1', result.json.id);
        assert.equal('a title', result.json.title);
        assert.equal('100', result.json.views);
      });
  });

  it('Get vehicle with not existin id 9876', function () {
    // Write code for this test
    assert.equal('remove this line', 1);
  });

  it('Get vehicle with not existin id 9876', function () {
    // Write code for this test
    assert.equal('remove this line', 1);
  });

  it('Add new post', function () {
    // Write code for this test
    assert.equal('remove this line', 1);
  });

  it('Add new post with bad request', function () {
    // Write code for this test
    assert.equal('remove this line', 1);
  });

  it('Update added vehicle', function () {
    // Write code for this test
    assert.equal('remove this line', 1);
  });

});