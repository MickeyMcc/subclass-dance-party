describe('Enterprise', function() {

  var enterprise, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    enterprise = new Enterprise(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(enterprise.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes it move', function() {
    sinon.spy(enterprise.$node, 'animate');
    enterprise.step();
    expect(enterprise.$node.animate.called).to.be.true;
  });

  describe('dance', function() {
    it('should call move at least once per second', function() {
      sinon.spy(enterprise, 'move');
      expect(enterprise.move.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(enterprise.move.callCount).to.be.equal(1);
      

    });
  });
});
