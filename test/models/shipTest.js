const assert = require('chai').assert;
const Ship = require('./../../src/models/ship.js');


describe('Ship', () => {
  describe('addShip', () => {
    it('should give the list of the positions', () => {
      let ship=new Ship('south',3,[1,2]);
      let actual=ship.getShipCoords();
      let expected= [[1,2],[1,3],[1,4]];
      assert.deepEqual(actual, expected);
    });
  });
  describe('isHit', () => {
    it('should return true if the ship is hit', () => {
      let ship=new Ship('south',3,[1,2]);
      let actual=ship.isHit([1,2]);
      assert.ok(actual);
    });
    it('should return false if the ship is not hit', () => {
      let ship=new Ship('south',3,[1,2]);
      let actual=ship.isHit([2,2]);
      assert.isNotOk(actual);
    });
  });
});